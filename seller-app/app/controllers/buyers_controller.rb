class BuyersController < ApplicationController
	def index
		buyers = Buyer.all
		render json: buyers
	end

	def show
		buyer = Buyer.find(params[:id])
		render json: buyer
	end

	def new
		buyer = Buyer.new
		render json: buyer
	end

	def create
		buyer = Buyer.new(buyer_params)

		if buyer.save
			redirect_to buyers_path
		else
			render :action => :new
		end
	end

	def edit
		buyer = Buyer.find(params[:id])
		render json: buyer
	end

	def update
		buyer = Buyer.find(params[:id])
		buyer.update!(buyer_params)
		redirect_to buyer
	end

	def destroy
		buyer = Buyer.find(params[:id])
		buyer.destroy!
		redirect_to buyers_path
		render plain: "buyer Deleted"
	end

	private 

	def buyer_params
		params.require(:buyer).permit(:name, :email, :address, :phonenumber)
	end
end
