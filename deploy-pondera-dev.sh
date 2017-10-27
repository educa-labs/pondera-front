echo "Comenzando deploy Pondera.cl"

npm install

npm run build

s3cmd --access_key=ENV['educalabs_aws_key'] --secret_key=ENV['educalabs_aws_secret'] sync dist/* s3://beta.pondera.cl

echo "Deploy listo ctm"