class NotificationsController < ApplicationController
  def index
    @notifications = Notification.all
  end

  def show
  end
end
