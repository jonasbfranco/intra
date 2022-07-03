## COMO USAR A URL AMIGÁVEL EM LOCALHOST NO WINDOWS

Localize o arquivo "httpd.conf" que fica dentro da pasta de instalação do Apache (varia conforme a instalação).

Tire o comentário (retire o símbolo #) das seguintes linhas:
#LoadModule rewrite_module modules/mod_rewrite.so
Fica assim:
LoadModule rewrite_module modules/mod_rewrite.so

Substitua todas as ocorrências de:
AllowOverride None
por:
AllowOverride All
* Deve ter umas 10 ocorrências em cada arquivo.

REESCREVA O CÓDIGO DO ".htaccess":
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /nomedapastadaloja/aquiseforsubdominio/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)\?*$ index.php?_route_=$1 [L,QSA]
</IfModule>

ATENÇÃO
Cuidado ao manipular os seus arquivos do Apache, pois ocorrendo
algum erro, o seu servidor pode para de funcionar.
Aqui funcionou, obrigado a todos.





## COMO USAR A URL AMIGÁVEL EM LOCALHOST NO LINUX

Para habilitar o uso do .htaccess no Apache do Ubuntu, primeiramente precisamos editar um arquivo, e, em seguida, ativar as regras de reescrita no servidor web.

Portanto, no terminal digite o seguinte comando:

$ sudo gedit /etc/apache2/sites-available/default
No arquivo que abriu, localize o bloco de instruções a seguir:

<Directory /var/www/>
 Options Indexes FollowSymLinks MultiViews
 AllowOverride None
 Order allow,deny
 allow from all
</Directory>
Neste local, substitua o valor destacado em negrito por All. Salve o arquivo e feche-o.

Agora, para habilitar as regras de reescrita no Apache, digite o seguinte comando:

$ sudo a2enmod rewrite
Para finalizar, basta reiniciar o servidor:

$ sudo /etc/init.d/apache2 restart
Pronto! O arquivo .htaccess já está habilitado para uso 
