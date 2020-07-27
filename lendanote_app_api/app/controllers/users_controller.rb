class UsersController < ApplicationController
    def create 
        user = User.create(
            name: params[:name]
            school: params[:school]
            region: params[:region]
            email: params[:email]
            phone: params[:phone]
            password: params[:password]
        )
    end
        render json: user
end
