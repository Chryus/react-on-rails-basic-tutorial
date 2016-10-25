require 'byebug'

class NotificationRelayJob < ApplicationJob
  queue_as :default

  def perform(notification)
    response = ApplicationController.render template: "notifications/notification.json.jbuilder", locals: {notification: notification}, formats: [:json]
    ActionCable.server.broadcast "notifications:#{notification.recipient_id}", { notification: response }
  end
end