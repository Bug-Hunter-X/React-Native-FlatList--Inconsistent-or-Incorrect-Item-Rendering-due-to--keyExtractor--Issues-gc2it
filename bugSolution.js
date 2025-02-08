The solution is to provide a proper `keyExtractor` function that guarantees unique keys for each item, even when the data array is modified.

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={(item) => item.id} // Correct - uses a unique identifier
/>
```

This corrected version assumes each item in the `data` array has a unique `id` property. If not, generate UUIDs or use another unique identifier for each item before passing the array to `FlatList`.