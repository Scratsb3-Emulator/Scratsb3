// Ensure VirtualMachine is correctly imported or defined
// If using a library, ensure it's included before this script
try {
    const vm = new window.VirtualMachine();
    console.log('VirtualMachine initialized', vm);
} catch (error) {
    console.error('Error initializing VirtualMachine:', error);
}

// Example JSON parsing with error handling
try {
    const jsonString = '{"key": "value"}';
    const jsonData = JSON.parse(jsonString);
    console.log('Parsed JSON:', jsonData);
} catch (error) {
    console.error('Error parsing JSON:', error);
}
