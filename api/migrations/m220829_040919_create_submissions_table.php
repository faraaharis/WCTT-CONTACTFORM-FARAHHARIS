<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%forms}}`.
 */
class m220829_040919_create_submissions_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%submissions}}', [
            'id'     => $this->primaryKey(),
            'name'   => $this->string()->notNull(),
            'email'  => $this->string()->notNull(),            
            'subject'     => $this->string()->notNull(),
            'description' => $this->text(),
            'created_at'  => 'timestamp NULL DEFAULT CURRENT_TIMESTAMP',
            'updated_at'  => 'timestamp NULL DEFAULT CURRENT_TIMESTAMP',

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%submissions}}');
    }
}
