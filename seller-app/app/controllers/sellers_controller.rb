class SellersController < ApplicationController
	def index
		sellers = Seller.all
		render json: sellers
	end

	def show
		seller = Seller.find(params[:id])
		render json: seller
	end

	def new
		seller = Seller.new
		render json: seller
	end

	def create
		seller = Seller.new(seller_params)

		if seller.save
			redirect_to sellers_path
		else
			render :action => :new
		end
	end

	def edit
		seller = Seller.find(params[:id])
		render json: seller
	end

	def update
		seller = Seller.find(params[:id])
		seller.update!(seller_params)
		redirect_to seller
	end

	def destroy
		seller = Seller.find(params[:id])
		seller.destroy!
		redirect_to sellers_path
		render plain: "seller Deleted"
	end

	private 

	def seller_params
		params.require(:seller).permit(:username, :firstname, :lastname, :email, :password)
	end
end
