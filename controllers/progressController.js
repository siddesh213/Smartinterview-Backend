import Progress from '../models/Progress.js';

export const updateProgress = async (req, res) => {
  try {
    const { category, increment } = req.body;
    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    if (category === 'dsa') {
      progress.dsaSolved += increment || 1;
    } else if (category === 'systemDesign') {
      progress.systemDesignCompleted += increment || 1;
    } else if (category === 'dbms') {
      progress.dbmsCompleted += increment || 1;
    }

    progress.updatedAt = new Date();
    await progress.save();
    res.json({ progress });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id });
    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }
    res.json({ progress });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryProgress = async (req, res) => {
  try {
    const { category } = req.params;
    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    const categoryMap = {
      'dsa': { count: progress.dsaSolved, items: progress.dsaCompletedItems },
      'system-design': { count: progress.systemDesignCompleted, items: progress.systemDesignCompletedItems },
      'dbms': { count: progress.dbmsCompleted, items: progress.dbmsCompletedItems },
    };

    const data = categoryMap[category];
    if (!data) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    res.json({ 
      completedCount: data.count,
      completedItems: data.items || []
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const markItemComplete = async (req, res) => {
  try {
    const { category, itemId, completed } = req.body;
    const progress = await Progress.findOne({ userId: req.user._id });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    const categoryMap = {
      'dsa': 'dsaCompletedItems',
      'systemDesign': 'systemDesignCompletedItems',
      'system-design': 'systemDesignCompletedItems',
      'dbms': 'dbmsCompletedItems',
    };

    const itemsField = categoryMap[category];
    if (!itemsField) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    const itemList = progress[itemsField];
    const itemIndex = itemList.indexOf(itemId.toString());

    if (completed && itemIndex === -1) {
      // Mark as complete
      itemList.push(itemId.toString());
    } else if (!completed && itemIndex !== -1) {
      // Mark as incomplete
      itemList.splice(itemIndex, 1);
    }

    progress.updatedAt = new Date();
    await progress.save();

    res.json({ 
      success: true,
      completedItems: itemList,
      completedCount: itemList.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};