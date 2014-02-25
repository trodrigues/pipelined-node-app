export PATH := ./node_modules/.bin:$(PATH)

js_path := public/javascripts
css_path := public/stylesheets
js_files := $(js_path)/app.js
css_files := $(css_path)/styles.css.sass
template_files := $(js_path)/*.hamlc

app_js := build/javascripts/app.js
app_css := build/styles.css
templates := build/templates.js

.PHONY: all clean

#all: $(app_js) $(app_css) $(templates)
all: $(app_js)

clean:
	rm -rf build

$(app_js): $(js_files)
	mkdir -p $(dir $@)
	browserify --debug -t concatenify $(js_files) > $@
	rm -f build/appfiles.js

$(templates): $(template_files)
	mkdir -p $(dir $@)
	haml-coffee -i $(js_path) -o $@

$(app_css): $(css_files)
	sass $(css_files) $@
