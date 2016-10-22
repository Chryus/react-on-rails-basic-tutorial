class NotificationRelayJob < ApplicationJob
  queue_as :default

  def perform(notification)
    html = ApplicationController.render partial: "notifications/notification.json.jbuilder", locals: {notification: notification})
    ActionCable.server.broadcast "notifications:#{notification.recipient_id}", html: html
  end
end