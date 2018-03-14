class StocksController < ApplicationController
	# before_action :ensure_signed_in
	
	def index
		stocks = Stock.all
		render json: stocks
	end

	def show
		stock = Stock.find(params[:id])
		render json: stock
	end

	def new
		stock = Stock.new
		render json: stock
	end

	def create
		stock = Stock.new(stock_params)

		if stock.save
			redirect_to stocks_path
		else
			render :action => :new
		end
	end

	def edit
		stock = Stock.find(params[:id])
		render json: stock
	end

	def update
		stock = Stock.find(params[:id])
		stock.update!(stock_params)
		redirect_to stock
	end

	def destroy
		stock = Stock.find(params[:id])
		stock.destroy!
		redirect_to stocks_path
		render plain: "stock Deleted"
	end

	private 

	def stock_params
		params.require(:stock).permit(:itemname, :itemnumber, :description, :price, :stock)
	end
end
