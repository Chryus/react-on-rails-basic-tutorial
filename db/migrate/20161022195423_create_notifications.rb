class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.references :user, foreign_key: true
      t.integer :recipient_id
      t.string :actor
      t.string :action
      t.string :notifiable_type
      t.integer :notifiable_id

      t.timestamps
    end
    add_index :notifications, [:notifiable_id, :notifiable_type]
  end
end
