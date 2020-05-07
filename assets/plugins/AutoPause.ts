import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    player: MediaPlayer;

    constructor () {
        this.threshold = 0.75,
        this.handleIntersection = this.handleIntersection.bind(this),
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run (player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold : this.threshold
        })

        observer.observe(this.player.media)
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }
    
    
    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isvisible = entry.intersectionRatio >= this.threshold

        if(isvisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    private handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible'
        if(isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;

