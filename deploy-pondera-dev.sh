echo "Chupalo Ivan"

npm install

npm run build

s3cmd --access_key=ENV['educalabs_aws_key'] --secret_key=ENV['educalabs_aws_secret'] sync build/* s3://beta.pondera.cl

echo "Deploy listo ctm"