import path from 'path'
import glob from "glob"
import express from 'express'
import pageController from '../../controllers/pageController'

const router = express.Router()

initializeSiteRoutes();

function initializeSiteRoutes() {
  const siteDirPath = path.resolve(__dirname, '../../../site');
  const siteFilePaths = getFileNamesRecursively(siteDirPath);
  siteFilePaths.forEach((filePath, i) => {
    const routeName = stripPrefixAndExtension(filePath, siteDirPath);
    createRoute(routeName, filePath);
  });
}

function getFileNamesRecursively(dirPath) {
  const globSearchPattern = "/**/*.*";
  const globOptions = {
    root: dirPath,
    nodir: true
  };
  const siteDirFiles = glob.sync(globSearchPattern, globOptions)
  return siteDirFiles;
}

function stripPrefixAndExtension(fileName, prefix) {
  const extension = path.parse(fileName).ext;
  return fileName
    .replace(prefix, '')
    .replace(extension, '')
}

function createRoute(routeName, filePath) {
  const optionalRouteParam = '/:param*?';
  console.log(routeName + optionalRouteParam)
  router.get(routeName + optionalRouteParam, function (req, res) {
    pageController.renderServerPage(req, res, filePath)
  });
}

export default router
