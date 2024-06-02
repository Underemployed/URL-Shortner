# URL Shortener

This project is a simple URL shortener. It allows users to input a long URL and get a shortened version that is easier to share.
Made using
Database Google Sheets
Backend Flask
I just wanted to understand how flask worked and if its really plausible to use Google sheets as Database.

## Features

- Shorten long URLs
- Copy short URLs to clipboard
- View and manage all your short URLs

## Installation

1. Clone the repository: `https://github.com/Underemployed/URL-Shortner.git`
2. Navigate into the project directory: `cd url-shortener`
3. Install the dependencies: `pip install -r requirements.txt`
4. Create a SpreadSheet copy code from Code.gs to appscript
5. Deploy the AppScript copy link and copy the deployment URL.
6. Open the `secrets.py` file in the project directory.
7. Add the deployment URL to the `secrets.py` file as follows:
   ```python
   web_app_url = 'your_deployment_url'
   ```
   Replace `your_deployment_url` with the actual deployment URL you copied in step 5.

## Usage

1. Enter your long URL in the input field.
2. Click on the "Shorten" button.
3. Your short URL will be displayed. You can copy it using the "Copy" button.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
