import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  overhead: {
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    transform: 'scale(1.8)',
    color: '#112244',
    margin: 'auto 20px'
  },
  slider: {
    slider: 'slider',
    previousButton: 'previousButton',
    nextButton: 'nextButton',
    buttonDisabled: 'disabled',
    track: 'track',
    slide: 'slide',
    hidden: 'hidden',
    previous: 'previous',
    current: 'current',
    next: 'next',
    animateIn: 'animateIn',
    animateOut: 'animateOut'
  }
});
