class PatientsController < ApplicationController

    def index
        render json: Patient.all

    end
end
