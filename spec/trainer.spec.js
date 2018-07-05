let Trainer = require('../trainer');

describe('Trainer', function() {
  it('should have a name', function() {
    let trainer = new Trainer('Adam');
    expect(trainer.identify()).toEqual('Trainer is Adam');
  });

  it('should capitalize the trainer\'s name', function() {
    let trainer = new Trainer('adam');
    expect(trainer.identify()).toEqual('Trainer is Adam');
  });

  it('should have tasks', function() {
    let trainer = new Trainer('adam', ['Get a Pokemon']);
    expect(trainer.printTasks()).toEqual('Remaining tasks: Get a Pokemon');
  });

  it('should default to an empty array if no tasks are provided', function() {
    let trainer = new Trainer('adam');
    expect(trainer.tasks).toEqual([]);
  });

  it('should print a message if no tasks remain', function() {
    let trainer = new Trainer('adam');
    expect(trainer.printTasks()).toEqual('No tasks left!');
  });

  it('should add new tasks to the tasks array', function() {
    let trainer = new Trainer('adam', ['Get a Pokemon']);
    trainer.addTask('Visit Professor Oak');
    expect(trainer.printTasks()).toEqual('Remaining tasks: Get a Pokemon, Visit Professor Oak');
  });

  it('should remove a task from a tasks', function() {
    let trainer = new Trainer('adam', ['Get a Pokemon', 'Visit Professor Oak']);
    trainer.removeTask('Get a Pokemon');
    expect(trainer.printTasks()).toEqual('Remaining tasks: Visit Professor Oak');
  });

  it('should verify the task exists before attempting to remove it', function() {
    let trainer = new Trainer('adam', ['Get a Pokemon', 'Visit Professor Oak']);
    trainer.removeTask('Beat Brock');
    expect(trainer.printTasks()).toEqual('Remaining tasks: Get a Pokemon, Visit Professor Oak');
  });
});