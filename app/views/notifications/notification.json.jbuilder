json.user notification.recipient_id
json.message render partial: "notifications/#{notification.notifiable_type.underscore.pluralize}/#{notification.action}", locals: {notification: notification}