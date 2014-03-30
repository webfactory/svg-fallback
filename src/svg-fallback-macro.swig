{% macro svg(svgSource, bitmapSource, description, extraClasses, extraAttributes) %}
    <img style="display: none;" class="fx-svg svg {{ extraClasses }}" src="about:blank" data-svg="{{ svgSource }}" data-bitmap="{{ bitmapSource }}" alt="{{ description }}" {{ extraAttributes }} />
    <noscript>
        <img class="svg-fallback {{ extraClasses }}" src="{{ bitmapSource }}" alt="{{ description }}" {{ extraAttributes }}/>
    </noscript>
{% endmacro %}