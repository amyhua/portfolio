class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
    @contact_form = Message.new
  end

  def create
    @contact_form = Message.new(params[:message])
    @contact_form.save
    if ContactMailer.contact_form_email(@contact_form).deliver
      redirect_to root_path, notice: 'Thank you for your message!'
    else
      redirect_to root_path, alert: 'Sorry, your message did not go through.'
    end
  end
end
