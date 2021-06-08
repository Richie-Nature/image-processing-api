import resizeImage from "@utils/tools/resizer";

describe("Image transform function should resolve or reject", () => {
  
  const imageMeta = {
    fn: "../../../assets/images/fjord.jpg",
    w: 200,
    h: 200
  };
  
  it("expects resizer to resolve", async ()=> {

    await expectAsync(resizeImage(imageMeta)).toBeResolved();
  });

  it("expects resizer to be rejected with error", async ()=> {

    imageMeta.fn = "../../../assets/images/csr.jpg";
    await expectAsync(resizeImage(imageMeta)).toBeRejectedWith(new Error("File not found"));
  });
});
