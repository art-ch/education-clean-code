class CalorieTracker {
  maxCalories: number;
  currentCalories: number;
  maxCaloriesBreached: string;

  constructor(maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
    this.maxCaloriesBreached = 'No';
  }

  trackCalories(calorieCount: number) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.maxCaloriesBreached = logCalorieSurplus('Yes');
    }
  }
}

const logCalorieSurplus = (message: string): string => message;

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(700);
calorieTracker.trackCalories(1200);

export default calorieTracker;
