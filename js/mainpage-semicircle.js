var bar = new ProgressBar.SemiCircle('.chartGauge', {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false
    },
    from: {color: '#3C7329'},
    to: {color: '#D72E2E'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            if (value < 20) {
                var word = "Way Below Average";
            } else if (value >= 20 && value < 40) {
                word = "Below Average";
            } else if (value >= 40 && value < 60) {
                word = "Average";
            } else if (value >= 60 && value < 80) {
                word = "Above Average";
            } else if (value >= 80 && value <= 100) {
                word = "Way Above Average";
            } else {
                word = "Calculating";
            }
            bar.setText(word);
        }
        bar.text.style.color = state.color;
    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
  
bar.animate(.5);