class UsersController < ApplicationController
    def create 
        user = User.create(
            name: params[:name],
            school: params[:school],
            region: params[:region],
            email: params[:email],
            phone: params[:phone],
            password: params[:password],
        )
        render json: user
    end
end
