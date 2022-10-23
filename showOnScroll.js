//author TheLoloS

//class that show elements on scroll
class Show {
  //add nodelist of elements that you want to anim
  constructor(nodeList, statement) {
    if (Object.prototype.isPrototypeOf.call(NodeList.prototype, nodeList)) {
      this.nodeList = [...nodeList];
    } else {
      this.nodeList = nodeList;
    }

    if (statement) {
      this.nodeList = this.nodeList.slice(1);
    }

    this.addClasses(this.getAtributes(this.nodeList), this.nodeList);
    window.addEventListener("scroll", () => {
      this.addClasses(this.getAtributes(this.nodeList), this.nodeList);
    });
  }
  //a method that allows you to read the parameters of the client and components
  getAtributes(a) {
    const allPositions = a.map((e) => {
      // returns the statistics of the items in the object
      return {
        elementPosition: e.getBoundingClientRect().height,
        clientPosition: e.getBoundingClientRect().top,
      };
    });
    return allPositions;
  }
  //a method that change classlist of elements if is allowed
  addClasses(a, b) {
    a.map((e, i) => {
      if (e.clientPosition < e.elementPosition - a[0].elementPosition * 0.2) {
        !b[i].classList.contains("showed")
          ? b[i].classList.add("showed")
          : undefined;
      }
    });
  }
}

//export class
export default Show;
