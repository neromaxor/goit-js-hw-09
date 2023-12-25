import"./assets/modulepreload-polyfill-ec808ebb.js";const m=document.querySelector("section"),n=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;m.insertAdjacentHTML("beforeend",n);const t=document.querySelector(".feedback-form"),a=t.querySelector('[name="email"]'),o=t.querySelector('[name="message"]'),r=localStorage.getItem("feedback-form-state");if(r)try{const e=JSON.parse(r);a.value=e.email,o.value=e.message}catch(e){console.error("LOCAL STORAGE PARSE ERROR",e)}t.addEventListener("input",()=>{const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",i);function i(e){e.preventDefault();const l=a.value,s=o.value;if(l===""||s===""){alert("Please fill in both fields in the form.");return}console.log({email:l,message:s}),localStorage.removeItem("feedback-form-state"),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
