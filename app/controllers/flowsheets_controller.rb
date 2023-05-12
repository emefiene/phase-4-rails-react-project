class FlowsheetsController < ApplicationController
    
    def index
       render json: Flowsheet.all

    end

    def show
      @flowsheet = Flowsheet.find(params[:id])
      render json: @flowsheet
    end

    # def
    #   @flowsheet = Flowsheet.find(params[:id])
    #   if @flowsheet
    # end
end
