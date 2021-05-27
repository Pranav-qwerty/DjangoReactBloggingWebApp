# Quick Start

#### Create Virtual Environment and Activate It

```shell
python -m venv env
./env/Scripts/activate
```

#### Install all dependencies

```shell
pip install -r requirements.txt
```

#### Run Backend

```shell
cd ./backend
python ./manage.py makemigrations
python ./manage.py migrate
python ./manage.py runserver
```

#### Run Frontend

```shell
cd ./frontend
yarn install
yarn start
```

`For the frontend I have used the template from https://www.free-css.com/free-css-templates/page262/cron`
