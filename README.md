# React Native FlatList: Inconsistent Item Rendering Due to `keyExtractor`

This repository demonstrates a common error encountered when using the `FlatList` component in React Native: inconsistent or incorrect item rendering caused by problems with the `keyExtractor` function.

## Problem
The `keyExtractor` function in `FlatList` is essential for efficient rendering and updates. If it does not generate unique and stable keys for each item, React Native may reuse keys or fail to correctly identify items, leading to flickering, incorrect display, and unexpected behavior. This is particularly noticeable when the data array is modified (items added, removed, or reordered).

## Solution
The solution involves implementing a `keyExtractor` function that reliably generates unique keys for each item. This often involves using a unique identifier from each item in the data array (e.g., a database ID or UUID).

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on an iOS or Android simulator/device.
4. Observe the initial rendering of the `FlatList`.  Then, try adding or removing items from the data array; note the incorrect display or unexpected behavior.

## How to Fix
1. Replace the faulty keyExtractor function in `bug.js` with the corrected version in `bugSolution.js`
2. Re-run the app and notice the improved and consistent rendering of the FlatList.