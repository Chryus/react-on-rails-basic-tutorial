class AddIndexOnRecipientId < ActiveRecord::Migration[5.0]
  def change
    add_index :notifications, :recipient_id
  end
end
