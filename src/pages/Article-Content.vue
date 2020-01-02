<template>
  <div id="article-content">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <p>解构赋值语法是一个 Javascript 表达式，这使得可以将值从数组或属性从对象提取到不同的变量中。</p>

        <h4>基本语法</h4>

        <pre>
          <code class="code">
            var a, b, rest;
            [a, b] = [10, 20];
            console.log(a); // 10
            console.log(b); // 20
            [a, b, ...rest] = [10, 20, 30, 40, 50];
            console.log(a); // 10
            console.log(b); // 20
            console.log(rest); // [30, 40, 50]
            ({ a, b } = { a: 10, b: 20 });
            console.log(a); // 10
            console.log(b); // 20
            // Stage 3 proposal
            ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
            console.log(a); // 10
            console.log(b); // 20
            console.log(rest); //{c: 30, d: 40}
          </code>
        </pre>

        <h4>解构数组</h4>

        <pre>
          <code class="code">
            // Basic variable assignment
            var foo = [''one'', ''two'', ''three''];
            var [one, two, three] = foo;
            console.log(one); // "one"
            console.log(two); // "two"
            console.log(three); // "three"
            // Assignment separate from declaration
            var a, b;
            [a, b] = [1, 2];
            console.log(a); // 1
            console.log(b); // 2
            // Default values
            var a, b;
            [a=5, b=7] = [1];
            console.log(a); // 1
            console.log(b); // 7
            // Swapping variables
            var a = 1;
            var b = 3;
            [a, b] = [b, a];
            console.log(a); // 3
            console.log(b); // 1
            // Ignoring some returned values
            function f() {
              return [1, 2, 3];
            }
            var [a, , b] = f();
            console.log(a); // 1
            console.log(b); // 3
            // ignore all returned values:
            [,,] = f();
            // Assigning the rest of an array to a variable\
            var [a, ...b] = [1, 2, 3];
            console.log(a); // 1
            console.log(b); // [2, 3]
          </code>
        </pre>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    window.scroll(0, 0);
    let codes = document.getElementsByClassName("code");
    for (let i = 0; i < codes.length; i++) {
      let ce = codes[i];
      ce.innerHTML = hljs.highlightAuto(ce.textContent).value;
    }
  }
};
</script>

<style>
</style>
