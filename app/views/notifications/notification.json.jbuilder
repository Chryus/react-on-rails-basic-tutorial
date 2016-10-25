json.id notification.id
json.recipient notification.recipient_id
json.template render partial: "notifications/#{notification.notifiable_type.underscore.pluralize}/#{notification.action}", locals: {notification: notification}