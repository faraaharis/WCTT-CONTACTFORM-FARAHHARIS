<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\db\ActiveRecord;

class Submission extends ActiveRecord
{
    /*
    If name is the real column name from your database you need to remove
        public $name;
    from your ActiveRecord class. You can not have model properties of the same name as the database columns declared in the class because ActiveRecord won't work.
    */

    public function fields()
    {
        return ['id', 'email', 'name', 'subject', 'description', 'created_at', 'updated_at'];
    }

    /**
     * @return string the name of the table associated with this ActiveRecord class.
     */
    public static function tableName()
    {
        return '{{submissions}}';
    }

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['name', 'email', 'subject', 'description'], 'required'],

            // email has to be a valid email address
            ['email', 'email'],
        ];
    }
}
