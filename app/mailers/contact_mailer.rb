class ContactMailer < ActionMailer::Base
  default to: "foramyhua@gmail.com"
  def contact_form_email(message)
    @message = message
    mail to: 'foramyhua@gmail.com',
         subject: "New Message from #{message.name} on amyhua.me!",
         from: message.email

  end
end
