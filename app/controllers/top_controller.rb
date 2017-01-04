class TopController < ApplicationController
  def index
    @messages = Message.all
    render component: "MessageBox", props: { url: "/messages", messages: @messages}
  end
end
