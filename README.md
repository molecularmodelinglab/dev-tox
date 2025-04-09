# DeTox: Predicting Developmental Toxicity Using In-Silico Methods

Welcome to DeTox, an in-silico tool designed to replace animal testing by leveraging computational methods to predict developmental toxicity. This repository includes code for data ingestion, preprocessing, model inference, and a user-friendly web interface.

## Repository Structure

dev-tox/
├── .vscode/        # Editor-specific configurations (e.g., launch and debug settings for VSCode)
├── dev_tox/        # Core Python code for scraping, preprocessing, and inference
├── models/         # Pre-trained machine learning models for toxicity prediction
├── Webserver/      # Flask-based web interface for DeTox
├── requirements.txt# List of Python dependencies
└── README.md       # Project documentation

## Objective

DeTox was created to serve as a freely available, open-source platform for the prediction of chemical-induced developmental toxicity based on molecular structure. The model is built with machine learning techniques and can be accessed via a web interface or run locally.

## Quickstart

Prerequisites
	•	Python ≥ 3.8
	•	Git

## Installation

Clone the repository and install dependencies:

git clone https://github.com/your-username/dev-tox.git
cd dev-tox
pip install -r requirements.txt

## Usage

Using the Web Scraping Module

The scraping tool is implemented in the dev_tox/scraper.py file.

## Running the Scraper

The scraper retrieves compound information from online databases for downstream model processing.

python dev_tox/scraper.py --input input_smiles.csv --output compound_data.csv

Arguments:
	•	--input: CSV file with a column of SMILES strings.
	•	--output: Path to save the extracted data (e.g., physicochemical properties, identifiers).

Ensure your input file is in proper format with a header SMILES.

Model Inference

The prediction pipeline uses pre-trained models stored in the models/ directory.

To run a toxicity prediction on a batch of molecules:

python dev_tox/predict.py 

--input compound_data.csv 
--model models/dtox_model.pkl 
--output predictions.csv

### Arguments:
	•	--input: CSV file containing compound data.
	•	--model: Path to the pre-trained model file.
	•	--output: Path to save the prediction results.

Running the Web App

The online web tool can be accessed here:

https://detox.mml.unc.edu/

The Webserver/ folder contains a Flask application that allows users to interact with DeTox via a web interface.

Locally running the Webserver

cd Webserver
python app.py

Visit http://127.0.0.1:5000 in your browser.

Folder Descriptions
	•	dev_tox/
	•	scraper.py: Retrieves molecular data via web APIs.
	•	predict.py: Loads model and performs prediction.
	•	preprocess.py: Normalizes and formats input data.
	•	utils.py: Utility functions (e.g., SMILES validation).
	•	models/
	•	Contains serialized machine learning models (.pkl).
	•	Include descriptors used for training to ensure reproducibility.
	•	Webserver/
	•	app.py: Flask application.
	•	templates/: HTML templates.
	•	static/: CSS and JS assets.

## Example Workflow

Step 1: Web scraping

python dev_tox/scraper.py --input input.csv --output data.csv

Step 2: Run prediction

python dev_tox/predict.py 

--input data.csv 
--model models/dtox_model.pkl --output results.csv

Step 3 (Optional): Use Web App

cd Webserver
python app.py


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Reference

DeTox: an In-Silico Alternative to Animal Testing for Predicting Developmental Toxicity Potential. Ricardo Scheufen Tieghi, Marielle Rath, José Teófilo Moreira-Filho, James Wellnitz, Holli-Joi Martin, Kathleen Gates, Helena T. Hogberg, Nicole Kleinstreuer, Alexander Tropsha, Eugene N. Muratov.

