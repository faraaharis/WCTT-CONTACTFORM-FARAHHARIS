<?php

namespace app\controllers;

use Yii;
use yii\rest\ActiveController;

class SubmissionController extends ActiveController
{
    public $modelClass = 'app\models\Submission';

    public function afterAction($action, $result)
    {
        // afterAction from parent will serialise the data and return proper JSON
        $result  = parent::afterAction($action, $result);

        // CUSTOMIZATION: Need to add header Content-Length as default response w/o Content-Length will cause FETCH Api to break in Web Frontend
        $headers = Yii::$app->response->headers;
        $headers->add('content-length', strlen(json_encode($result)));
        return $result;
    }
}
