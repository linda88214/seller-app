class OrdersController < ApplicationController
	before_action :ensure_signed_in
	
	def index
		orders = Order.all
		a = orders.map do |a|
			[a, a.buyer.name]
		end
		p a
		render json: orders
	end

	def show
		order = Order.find(params[:id])
		p buyer = order.buyer
		render json: order
	end

	def new
		order = Order.new
		render json: order
	end

	def create
		order = Order.create!(order_params)
		order.save

		if order.save
			redirect_to orders_path
			render json: order
		else
			puts 'didnt save'
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
		params.require(:order).permit(:itemname, :qty, :itemnumber, :total)
	end	
end
