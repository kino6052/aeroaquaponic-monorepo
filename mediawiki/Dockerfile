FROM debian:sid

ENV MEDIAWIKI_DB_TYPE=postgres
ENV MEDIAWIKI_DB_HOST=ec2-54-156-47-113.compute-1.amazonaws.com
ENV MEDIAWIKI_DB_PASSWORD=a740a65c2dd45b3992bb9a0a3be16d8af28dbdc4412c78ebc7b2c20783855991
ENV MEDIAWIKI_DB_USER=llyqubbrkfupoa
ENV MEDIAWIKI_DB_NAME=d50jjl9kk3htap
RUN sed -i "s|80|$PORT|g" /etc/apache2/ports.conf

ENV MEDIAWIKI_VERSION wmf/1.30.0-wmf.4

# XXX: Consider switching to nginx.
RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		ca-certificates \
		apache2 \
		libapache2-mod-php7.1 \
		php7.1-mysql \
		php7.1-cli \
		php7.1-gd \
		php7.1-curl \
		php7.1-mbstring \
		php7.1-xml \
		imagemagick \
		netcat \
		git \
	; \
	rm -rf /var/lib/apt/lists/*; \
	rm -rf /var/cache/apt/archives/*; \
	a2enmod rewrite; \
	a2enmod proxy; \
	a2enmod proxy_http; \
	# Remove the default Debian index page.
	rm /var/www/html/index.html


# MediaWiki setup
RUN set -eux; \
	mkdir -p /usr/src; \
	git clone \
		--depth 1 \
		-b $MEDIAWIKI_VERSION \
		https://gerrit.wikimedia.org/r/p/mediawiki/core.git \
		/usr/src/mediawiki \
	; \
	cd /usr/src/mediawiki; \
	git submodule update --init skins; \
	git submodule update --init vendor; \
	cd extensions; \
	# Extensions
	# TODO: make submodules shallow clones?
	git submodule update --init --recursive VisualEditor; \
	git submodule update --init --recursive Math; \
	git submodule update --init --recursive EventBus; \
	git submodule update --init --recursive Scribunto; \
	git submodule update --init --recursive ParserFunctions; \
	git submodule update --init --recursive SyntaxHighlight_GeSHi; \
	git submodule update --init --recursive Cite; \
	git submodule update --init --recursive Echo; \
	git submodule update --init --recursive Flow; \
	git submodule update --init --recursive PageImages; \
	git submodule update --init --recursive TextExtracts; \
	git submodule update --init --recursive MobileFrontend; \
	git submodule update --init --recursive TemplateData; \
	git submodule update --init --recursive ParserFunctions; \
	git submodule update --init --recursive Citoid


COPY php.ini /usr/local/etc/php/conf.d/mediawiki.ini

COPY apache/mediawiki.conf /etc/apache2/
RUN echo "Include /etc/apache2/mediawiki.conf" >> /etc/apache2/apache2.conf

COPY docker-entrypoint.sh /entrypoint.sh

EXPOSE 80 443
ENTRYPOINT ["/entrypoint.sh"]
CMD ["apachectl", "-e", "info", "-D", "FOREGROUND"]