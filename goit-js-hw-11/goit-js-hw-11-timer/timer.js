export class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.time = new Date() - targetDate;
  }
  getDays() {
    return Math.floor(this.time / (1000 * 60 * 60 * 24));
  }
  getHours() {
    return Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  getMins() {
    return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  }
  getSecs() {
    return Math.floor((this.time % (1000 * 60)) / 1000);
  }

  htmlTimer() {
    return `
	  <div class="field">
		<span class="value" data-value="days">${this.getDays()}</span>
		<span class="label">Days</span>
	  </div>

	  <div class="field">
		<span class="value" data-value="hours">${this.getHours()}</span>
		<span class="label">Hours</span>
	  </div>

	  <div class="field">
		<span class="value" data-value="mins">${this.getMins()}</span>
		<span class="label">Minutes</span>
	  </div>

	  <div class="field">
		<span class="value" data-value="secs">${this.getSecs()}</span>
		<span class="label">Seconds</span>
	  </div>`;
  }
  createTimer() {
    const elemTimer = document.createElement('div');
    elemTimer.classList.add('timer');
    elemTimer.id = this.selector;
    elemTimer.innerHTML = this.htmlTimer();
    document.querySelector('body').appendChild(elemTimer);
    this.startTimer();
  }
  startTimer() {
    const thisTimer = document.getElementById(this.selector);
    const days = thisTimer.querySelector('[data-value="days"]');
    const hours = thisTimer.querySelector('[data-value="hours"]')
    const mins = thisTimer.querySelector('[data-value="mins"]')
    const secs = thisTimer.querySelector('[data-value="secs"]')

    const interval = setInterval(() => {
		if(this.time === 0){
			clearInterval(interval);
		}
      this.time -= 1000;
      days.textContent = this.getDays();
      hours.textContent = this.getHours();
      mins.textContent = this.getMins();
      secs.textContent = this.getSecs();
    }, 1000);
  }
}

const timer = new CountdownTimer('timer-1', new Date('Oct 1, 2019'));
timer.createTimer();

const timer2 = new CountdownTimer('timer-2', new Date('nov 13, 2000'));
timer2.createTimer();
