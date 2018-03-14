class OrderstatusesController < ApplicationController
	# before_action :ensure_signed_in
	
	def index
		orderstatuses = Orderstatus.all
		render json: orderstatuses
	end

	def show
		orderstatus = Orderstatus.find(params[:id])
		render json: orderstatus
	end

	def new
		orderstatus = Orderstatus.new
		render json: orderstatus
	end

	def create
		orderstatus = Orderstatus.new(orderstatus_params)

		if orderstatus.save
			redirect_to orderstatuses_path
		else
			render :action => :new
		end
	end

	def edit
		orderstatus = Orderstatus.find(params[:id])
		render json: orderstatus
	end

	def update
		orderstatus = Orderstatus.find(params[:id])
		orderstatus.update!(orderstatus_params)
		redirect_to orderstatus
	end

	def destroy
		orderstatus = Orderstatus.find(params[:id])
		orderstatus.destroy!
		redirect_to orderstatuss_path
		render plain: "orderstatus Deleted"
	end

	private 

	def orderstatus_params
		params.require(:orderstatus).permit(:ordernumber, :orderdate, :total, :status, :note, :seller_id, :buyer_id)
	end
end
