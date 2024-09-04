! function() {
    "use strict";

    function e(e) {
        return Math.floor(255 * e)
    }

    function a(e) {
        return e > 36864 ? 1 : e > 25600 ? 3 : e > 16384 ? 5 : e > 9216 ? 7 : e > 4096 ? 9 : e > 1024 ? 11 : e > 576 ? 13 : e > 256 ? 14 : 15
    }

    function n(a, n, r) {
        ! function(a, n, r, o, i, l) {
            var s = x;
            if (!(l <= 1)) {
                var c = l * l * f + l * d + v,
                    u = 17 / l,
                    p = (2 + l / 1.5) * ((performance.now() - I) % 8e5 / 8e5) * (g / t(l)),
                    y = 4.5 - t(l) / 4;
                T.scale(m * 2.5, m * 2.5);
                p %= 64 * l, T.save(), T.setTransform(1, 0, 0, 1, 0, 0), T.scale(m, m), T.rotate(c), T.translate(-u, -p), T.scale(y, y);
                var P = function(a, n, t, r) {
                    n = e(n);
                    t = e(t);
                    r = e(r);
                    var o = a.src + n + "," + t + "," + r;
                    if (o in F) return F[o];
                    E.imageSmoothingEnabled = false;
                    E.drawImage(a, 0, 0);
                    for (var i = E.getImageData(0, 0, 256, 256), l = i.data, s = 0, c = l.length; s < c; s += 4) 0 != l[s] ? (l[s + 3] = l[s], l[s] = n, l[s + 1] = t, l[s + 2] = r) : l[s + 3] = 0;
                    E.putImageData(i, 0, 0);
                    var u = new Image;
                    return u.src = b.toDataURL(), F[o] = u, u
                }(s, r, o, i);
                for (a = -w; a < w; a++)
                    for (n = -w; n < w; n++)
                        for (var C = -s.width / 2 + s.width * a, D = -s.height / 2 + s.width * n, S = 0; S < h; S++) T.drawImage(P, C, D);
                T.restore()
            }
        }(a, 1, (.5 * y.nextFloat() + .1) * n, (.5 * y.nextFloat() + .4) * n, (.5 * y.nextFloat() + .5) * n, r)
    }

    function t(e) {
        return 18 - e
    }

    function r() {
        requestAnimationFrame(r);
        var e = performance.now() / 1e3,
            l = Math.min(e - P, 1);
        if (P = e, D > 0) {
            if ((C += l) < 1 / D) return;
            C -= 1 / D
        }! function() {
            T.save(), T.setTransform(1, 0, 0, 1, 0, 0), T.clearRect(0, 0, o, i), T.restore(), y.setSeed(p);
            var e = u ? a(253) + 1 : a(253),
                r = u ? 1 : .75;
            n(r, .15, 0);
            for (var l = 1; l < e; ++l) n(r, 2 / t(l), l)
        }()
    }

    let currentLine = 0;
    let currentChar = 0;
    let typingInterval;
    let scrollOffset = 0;

    const lines = [
        "function hackSystem() {",
        "  const target = getRandomTarget();",
        "  const vulnerabilities = scanForVulnerabilities(target);",
        "  if (vulnerabilities.length > 0) {",
        "    const exploit = createExploit(vulnerabilities[0]);",
        "    const success = deployExploit(target, exploit);",
        "    if (success) {",
        "      console.log('Access granted');",
        "      return true;",
        "    }",
        "  }",
        "  console.log('Access denied');",
        "  return false;",
        "}",
        "",
        "while (true) {",
        "  if (hackSystem()) {",
        "    break;",
        "  }",
        "  wait(1000);",
        "}",
        "function greet(name) {",
        "    return 'Hello, ' + name + '!';",
        "}",

        "function add(a, b) {",
        "    return a + b;",
        "}",

        "function subtract(a, b) {",
        "    return a - b;",
        "}",

        "function multiply(a, b) {",
        "    return a * b;",
        "}",

        "function divide(a, b) {",
        "    if (b === 0) {",
        "        throw new Error('Cannot divide by zero');",
        "    }",
        "    return a / b;",
        "}",

        "let numbers = [1, 2, 3, 4, 5];",
        "let doubledNumbers = numbers.map(num => num * 2);",
        "let filteredNumbers = numbers.filter(num => num > 2);",
        "let total = numbers.reduce((acc, num) => acc + num, 0);",

        "console.log('Doubled:', doubledNumbers);",
        "console.log('Filtered:', filteredNumbers);",
        "console.log('Total:', total);",

        "function isPrime(num) {",
        "    if (num <= 1) return false;",
        "    for (let i = 2; i <= Math.sqrt(num); i++) {",
        "        if (num % i === 0) return false;",
        "    }",
        "    return true;",
        "}",

        "let primes = [];",
        "for (let i = 1; i <= 100; i++) {",
        "    if (isPrime(i)) {",
        "        primes.push(i);",
        "    }",
        "}",

        "console.log('Prime numbers from 1 to 100:', primes);",

        "const person = {",
        "    name: 'John',",
        "    age: 30,",
        "    hobbies: ['reading', 'gaming', 'coding'],",
        "    introduce: function() {",
        "        return `My name is ${this.name} and I am ${this.age} years old.`;",
        "    }",
        "};",

        "console.log(person.introduce());",

        "let nums = [5, 2, 9, 1, 5, 6];",
        "nums.sort();",
        "console.log('Sorted numbers:', nums);",

        "const fruits = ['apple', 'banana', 'cherry'];",
        "fruits.push('orange');",
        "fruits.pop();",
        "console.log('Fruits:', fruits);",

        "let counter = 0;",
        "const interval = setInterval(() => {",
        "    console.log('Counter:', counter);",
        "    counter++;",
        "    if (counter === 5) {",
        "        clearInterval(interval);",
        "    }",
        "}, 1000);",

        "function fibonacci(n) {",
        "    let fib = [0, 1];",
        "    for (let i = 2; i < n; i++) {",
        "        fib[i] = fib[i - 1] + fib[i - 2];",
        "    }",
        "    return fib;",
        "}",

        "console.log(fibonacci(10));",
        "const uniqueNumbers = [...new Set(numbers)];",
        "console.log('Unique numbers:', uniqueNumbers);",

        "function reverseString(str) {",
        "    return str.split('').reverse().join('');",
        "}",

        "console.log(reverseString('hello'));",

        "class Animal {",
        "    constructor(name) {",
        "        this.name = name;",
        "    }",
        "    speak() {",
        "        console.log(this.name + ' makes a noise.');",
        "    }",
        "}",

        "class Dog extends Animal {",
        "    speak() {",
        "        console.log(this.name + ' barks.');",
        "    }",
        "}",

        "const myDog = new Dog('Rex');",
        "myDog.speak();",

        "const logMessage = (message) => {",
        "    console.log(new Date().toISOString() + ' - ' + message);",
        "};",

        "logMessage('This is a log message.');",

        "const randomNumber = (max) => Math.floor(Math.random() * max);",
        "console.log('Random number:', randomNumber(100));",

        "const promises = [",
        "    Promise.resolve(1),",
        "    Promise.resolve(2),",
        "    Promise.resolve(3),",
        "];",

        "Promise.all(promises).then(values => {",
        "    console.log('Resolved values:', values);",
        "});",

        "const userNames = ['Alice', 'Bob', 'Charlie'];",
        "userNames.forEach(name => {",
        "    console.log('User:', name);",
        "});",

        "const square = (x) => x * x;",
        "console.log('Square of 4:', square(4));",

        "setTimeout(() => {",
        "    console.log('This runs after 2 seconds');",
        "}, 2000);",

        "let obj = {",
        "    a: 1,",
        "    b: 2,",
        "};",
        "({ a, b } = obj);",
        "console.log(a, b);",
        "// A simple program to demonstrate random JavaScript code",
        "function getRandomInt(min, max) {",
        "    return Math.floor(Math.random() * (max - min + 1)) + min;",
        "}",
        "",
        "function generateRandomArray(length, min, max) {",
        "    let randomArray = [];",
        "    for (let i = 0; i < length; i++) {",
        "        randomArray.push(getRandomInt(min, max));",
        "    }",
        "    return randomArray;",
        "}",
        "",
        "function calculateAverage(array) {",
        "    let total = 0;",
        "    for (let num of array) {",
        "        total += num;",
        "    }",
        "    return total / array.length;",
        "}",
        "",
        "function findMax(array) {",
        "    let max = array[0];",
        "    for (let num of array) {",
        "        if (num > max) {",
        "            max = num;",
        "        }",
        "    }",
        "    return max;",
        "}",
        "",
        "function findMin(array) {",
        "    let min = array[0];",
        "    for (let num of array) {",
        "        if (num < min) {",
        "            min = num;",
        "        }",
        "    }",
        "    return min;",
        "}",
        "",
        "function displayArray(array) {",
        "    console.log('Array: ' + array.join(', '));",
        "}",
        "",
        "const arrayLength = 10;",
        "const minValue = 1;",
        "const maxValue = 100;",
        "",
        "let randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);",
        "displayArray(randomNumbers);",
        "",
        "let average = calculateAverage(randomNumbers);",
        "console.log('Average: ' + average);",
        "",
        "let maxNumber = findMax(randomNumbers);",
        "console.log('Maximum Number: ' + maxNumber);",
        "",
        "let minNumber = findMin(randomNumbers);",
        "console.log('Minimum Number: ' + minNumber);",
        "",
        "const sortedArray = randomNumbers.slice().sort((a, b) => a - b);",
        "console.log('Sorted Array: ' + sortedArray.join(', '));",
        "",
        "function isEven(num) {",
        "    return num % 2 === 0;",
        "}",
        "",
        "function filterEvenNumbers(array) {",
        "    return array.filter(isEven);",
        "}",
        "",
        "let evenNumbers = filterEvenNumbers(randomNumbers);",
        "console.log('Even Numbers: ' + evenNumbers.join(', '));",
        "",
        "function filterOddNumbers(array) {",
        "    return array.filter(num => !isEven(num));",
        "}",
        "",
        "let oddNumbers = filterOddNumbers(randomNumbers);",
        "console.log('Odd Numbers: ' + oddNumbers.join(', '));",
        "",
        "function squareNumbers(array) {",
        "    return array.map(num => num * num);",
        "}",
        "",
        "let squaredNumbers = squareNumbers(randomNumbers);",
        "console.log('Squared Numbers: ' + squaredNumbers.join(', '));",
        "",
        "function countOccurrences(array, value) {",
        "    return array.reduce((count, num) => num === value ? count + 1 : count, 0);",
        "}",
        "",
        "let valueToCount = 50;",
        "let occurrences = countOccurrences(randomNumbers, valueToCount);",
        "console.log('Occurrences of ' + valueToCount + ': ' + occurrences);",
        "",
        "function reverseArray(array) {",
        "    return array.reverse();",
        "}",
        "",
        "let reversedArray = reverseArray(randomNumbers.slice());",
        "console.log('Reversed Array: ' + reversedArray.join(', '));",
        "",
        "function mergeArrays(array1, array2) {",
        "    return array1.concat(array2);",
        "}",
        "",
        "let additionalNumbers = generateRandomArray(arrayLength, minValue, maxValue);",
        "displayArray(additionalNumbers);",
        "",
        "let mergedArray = mergeArrays(randomNumbers, additionalNumbers);",
        "console.log('Merged Array: ' + mergedArray.join(', '));",
        "",
        "function shuffleArray(array) {",
        "    for (let i = array.length - 1; i > 0; i--) {",
        "        const j = Math.floor(Math.random() * (i + 1));",
        "        [array[i], array[j]] = [array[j], array[i]];",
        "    }",
        "    return array;",
        "}",
        "",
        "let shuffledArray = shuffleArray(randomNumbers.slice());",
        "console.log('Shuffled Array: ' + shuffledArray.join(', '));",
        "",
        "console.log('Program Completed');",
        "function exploitSystem() {",
        "  let payload = [];",
        "  for (let i = 0; i < 150; i++) {",
        "    payload.push(Math.floor(Math.random() * 256));",
        "  }",
        "  console.log('Payload generated:');",
        "  console.log(payload);",
        "  let encodedPayload = '';",
        "  for (let i = 0; i < payload.length; i++) {",
        "    encodedPayload += String.fromCharCode(payload[i]);",
        "  }",
        "  console.log('Encoded Payload: ' + encodedPayload);",
        "  let maliciousCode = '';",
        "  for (let i = 0; i < encodedPayload.length; i++) {",
        "    maliciousCode += encodedPayload.charCodeAt(i).toString(16);",
        "  }",
        "  console.log('Malicious Code: ' + maliciousCode);",
        "  let targetSystem = {",
        "    ip: '192.168.1.1',",
        "    port: 8080,",
        "    status: 'secure',",
        "  };",
        "  console.log('Target System:');",
        "  console.log(targetSystem);",
        "  if (targetSystem.status === 'secure') {",
        "    console.log('Initiating exploit...');",
        "    targetSystem.status = 'compromised';",
        "    console.log('System compromised!');",
        "  } else {",
        "    console.log('System already compromised.');",
        "  }",
        "  let backdoor = function() {",
        "    console.log('Backdoor activated.');",
        "    let accessGranted = false;",
        "    if (targetSystem.status === 'compromised') {",
        "      accessGranted = true;",
        "      console.log('Access granted to target system.');",
        "    } else {",
        "      console.log('Access denied.');",
        "    }",
        "    return accessGranted;",
        "  };",
        "  let access = backdoor();",
        "  if (access) {",
        "    console.log('Executing payload...');",
        "    for (let i = 0; i < payload.length; i++) {",
        "      console.log('Executing byte: ' + payload[i]);",
        "    }",
        "    console.log('Payload execution complete.');",
        "  } else {",
        "    console.log('Failed to execute payload.');",
        "  }",
        "  console.log('Cleaning up traces...');",
        "  targetSystem.status = 'secure';",
        "  console.log('System restored to secure state.');",
        "}",
        "exploitSystem();",
    ];

    function drawCodeBackground() {
        T.save();
        T.setTransform(1, 0, 0, 1, 0, 0);
        T.fillStyle = 'black';
        T.fillRect(0, 0, o, i);
        T.font = '14px "Courier New", monospace';
        T.fillStyle = '#00FF00';
        
        const lineHeight = 20;
        const visibleLines = Math.floor(i / lineHeight);
        
        let y = lineHeight - scrollOffset;
        
        for (let i = 0; i <= currentLine; i++) {
            if (i === currentLine) {
                T.fillText(lines[i].substring(0, currentChar), 10, y);
            } else {
                T.fillText(lines[i], 10, y);
            }
            y += lineHeight;
            //if (y > i+2) break;
        }
        
        T.restore();
    }

    function animateTyping() {
        if (currentLine < lines.length) {
            if (currentChar < lines[currentLine].length) {
                currentChar++;
            } else {
                currentLine++;
                currentChar = 0;
                
                // Check if we need to scroll
                const lineHeight = 20;
                const visibleLines = Math.floor(i / lineHeight);
                if (currentLine >= visibleLines) {
                    scrollOffset += lineHeight;
                }
            }
            drawCodeBackground();
        } else {
            // Reset to start over
            currentLine = 0;
            currentChar = 0;
            scrollOffset = 0;
        }
    }

    function startTypingAnimation() {
        if (typingInterval) clearInterval(typingInterval);
        typingInterval = setInterval(animateTyping, 20); // Adjust speed here
    }

    function drawParticlesBackground() {
        T.save();
        T.setTransform(1, 0, 0, 1, 0, 0);
        T.clearRect(0, 0, o, i);
        T.restore();
        y.setSeed(p);
        var e = u ? a(253) + 1 : a(253),
            r = u ? 1 : .75;
        n(r, .15, 0);
        for (var l = 1; l < e; ++l) n(r, 2 / t(l), l);
    }

    var isParticlesBackground = false;
    var isCodeBackground = false;
    var once = false;

    function redrawBackground() {
        o = S.width = S.clientWidth;
        i = S.height = S.clientHeight;
        T.imageSmoothingEnabled = false;

        // Reset the typing animation
        currentLine = 0;
        currentChar = 0;
        scrollOffset = 0;

        // Reset the seed to generate a new pattern
        p = Math.floor(Math.random() * 65536);
        y.setSeed(p);

        // Randomly choose between code and particles background
        if (!once) {
            isParticlesBackground = Math.random() < 0.5;
            if (isParticlesBackground) {
                //drawParticlesBackground();
                animateParticles()
                console.log("Drew particles background");
            } else {
                //drawCodeBackground();
                startTypingAnimation();
                console.log("Drew code background");
                isCodeBackground = true;
            }
            once = true;
        }

        if (!isCodeBackground) {
            drawParticlesBackground();
        }
    }  

    function animateParticles() {
        if (isParticlesBackground) {
            drawParticlesBackground();
        }
        requestAnimationFrame(animateParticles);
    }

    // Make redrawBackground available globally
    window.redrawBackground = redrawBackground;

    var o, i, l = 65535,
        s = 57068,
        c = 58989,
        u = 1,
        f = Math.floor(Math.random() * 65535),
        d = Math.floor(Math.random() * 65535),
        v = Math.floor(Math.random() * 65535),
        g = 20e3,
        m = 2.5,
        w = 4,
        h = 1,
        p = 31100,
        y = new function e(a) {
            function n(e) {
                o = e & l ^ c, r = e / 65536 & l ^ s, t = e / 4294967296 & l ^ 5
            }
            var t, r, o;
            ! function(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = {
                setSeed: n,
                nextFloat: function() {
                    return a = r * c + o * s + ((e = o * c + 11) >>> 16), n = t * c + r * s + 5 * o + (a >>> 16), o = e &= l, (65536 * (t = n &= l) + (r = a &= l) >>> 8) / 16777216;
                    var e, a, n
                }
            };
            for (var u in i) i[u] = {
                value: i[u]
            };
            Object.defineProperties(this, i), n(a)
        }(p),
        I = performance.now(),
        x = new Image;
    x.crossOrigin = "anonymous", x.src = "./end_portal.png";
    var F = {},
        b = document.createElement("canvas");
    b.width = 256, b.height = 256;
    var E = b.getContext("2d"),
        P = performance.now() / 1e3,
        C = 0,
        D = 0,
        S = document.getElementById("render"),
        T = S.getContext("2d");
    T.imageSmoothingEnabled = false;
    window.onload = function() {
        console.log("Window loaded");
        redrawBackground();
    };

    window.addEventListener('resize', function() {
        console.log("Window resized");
        redrawBackground();
    });

    // Log initial setup
    console.log("Script initialized. Canvas:", S, "Context:", T);
}();
