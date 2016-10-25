json.array! @notifications do |notification|
  json.recipient notification.recipient_id
  json.template render partial: "notifications/#{notification.notifiable_type.underscore.pluralize}/#{notification.action}", locals: {notification: notification}, formats: [:html]
end