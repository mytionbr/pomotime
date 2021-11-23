export default class TimerController {
    constructor(){
        this.setup = {
            POMODORO: 20,
            SHORT_BREAK: 5,
            LONG_BREAK: 10
        }
        this.sessions = {
            POMODORO: 'POMODORO',
            SHORT_BREAK:'SHORT_BREAK',
            LONG_BREAK: 'LONG_BREAK'
        }
        this.current = this.sessions.POMODORO;
        this.sessionCount = 0;
        this.sessionsForLongBreak = 4;
    }

    endOfSession(){
        switch (this.current) {
            case this.sessions.POMODORO:
                this.endOfPomodoro();
                break;
            case this.sessions.SHORT_BREAK:
                this.endOfShortBreak();
                break;
            case this.sessions.LONG_BREAK:
                this.endOfLongBreak();
                break;
            default:
                break;
        }
    }

    endOfPomodoro(){
        this.sessionCount ++;
        if(this.sessionCount % this.sessionsForLongBreak === 0){
            this.current = this.sessions.LONG_BREAK;
        }else {
            this.current = this.sessions.SHORT_BREAK;
        }
    }

    endOfShortBreak(){
        this.current = this.sessions.POMODORO;
    }

    endOfLongBreak(){
        this.current = this.sessions.POMODORO;
    }

    getCurrentTime(){
        return this.setup[this.current]
    }

    getCurrentSession(){
        return this.current
    }
}