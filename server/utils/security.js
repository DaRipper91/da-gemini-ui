import path from 'path';

/**
 * Checks if a child path is within a parent path.
 *
 * @param {string} childPath - The path to check.
 * @param {string} parentPath - The parent directory.
 * @returns {boolean} - True if the child path is within the parent path.
 */
export function isPathInside(childPath, parentPath) {
  if (!childPath || !parentPath) return false;

  const absoluteChild = path.resolve(childPath);
  const absoluteParent = path.resolve(parentPath);

  const relative = path.relative(absoluteParent, absoluteChild);

  return !relative.startsWith('..') && !path.isAbsolute(relative);
}
