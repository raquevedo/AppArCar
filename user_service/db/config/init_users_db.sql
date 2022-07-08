GRANT ALL ON users TO ms_users_app;
ALTER USER 'ms_users_app'@'%' IDENTIFIED WITH 'mysql_native_password' BY 'pwdusersapp';
FLUSH PRIVILEGES;