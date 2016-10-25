class NotificationRelayJob < ApplicationJob
  queue_as :default

  def perform(notification)
    notification = ApplicationController.render partial: "notifications/#{notification.notifiable_type.underscore.pluralize}/#{notification.action}", locals: {notification: notification}
    ActionCable.server.broadcast "notifications:#{notification.recipient_id}", notification: notification
  end
end