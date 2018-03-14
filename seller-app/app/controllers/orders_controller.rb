class OrdersController < ApplicationController
	# before_action :ensure_signed_in
	
	def index
		orders = Order.all
		render json: orders
	end

	def show
		order = Order.find(params[:id])
		render json: order
	end

	def new
		order = Order.new
		render json: order
	end

	def create
		order = Order.new(order_params)

		if order.save
			redirect_to orders_path
		else
			render :action => :new
		end
	end

	def edit
		order = Order.find(params[:id])
		render json: order
	end

	def update
		order = Order.find(params[:id])
		order.update!(order_params)
		redirect_to order
	end

	def destroy
		order = Order.find(params[:id])
		order.destroy!
		redirect_to orders_path
		render plain: "order Deleted"
	end

	private 

	def order_params
		params.require(:order).permit(:qty, :price, :total, :buyer_id, :stock_id, :orderstatus_id)
	end	
end
