echo "Starting deploy Pondera.cl"
source .env
yarn install
yarn build
s3cmd sync dist/* s3://beta.pondera.cl

echo "Deploy readt: beta.pondera.cl "