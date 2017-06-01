/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function requireAll(requireContext) {
	  return requireContext.keys().map(requireContext);
	}
	__webpack_require__(1);
	__webpack_require__(19);
	var modules = requireAll(__webpack_require__(2));
	__webpack_require__(13);
	__webpack_require__(18);

	console.log("Hi from main.js!");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.2.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( ">tbody", elem )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with computed style
		var valueIsBorderBox,
			styles = getStyles( elem ),
			val = curCSS( elem, name, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if ( val === "auto" ) {
			val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var doc, docElem, rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( jQuery.isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./arrow-button-disabled/arrow-button-disabled.js": 3,
		"./arrow-button/arrow-button.js": 5,
		"./button/button.js": 7,
		"./circle-progress-bar-b/circle-progress-bar-b.js": 9,
		"./circle-progress-bar/circle-progress-bar.js": 11
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(10);
	__webpack_require__(1);

	var ctx = $('.circle-progress-bar-b__value');
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: ["first", "second", "third", "fourth"],
	        datasets: [{
	            data: [10, 25, 40, 45],
	            backgroundColor: ["#747474", "#e75735", "#4eb7a8", "#e5e5e5"],
	            borderWidth: 0
	        }],
	        options: {
	            elements: {
	                arc: {
	                    borderColor: "#eee"
	                }
	            }
	        }
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);
	__webpack_require__(1);

	console.log('Hi from module "circle-progress-bar.js" !');

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Lato/Lato-Black/fonts.css": 14,
		"./Lato/Lato-Bold/fonts.css": 15,
		"./Lato/Lato-Light/fonts.css": 16,
		"./Lato/Lato-Regular/fonts.css": 17
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/*!
	 * Chart.js
	 * http://chartjs.org/
	 * Version: 2.6.0
	 *
	 * Copyright 2017 Nick Downie
	 * Released under the MIT license
	 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
	 */
	!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){var t;return function t(e,n,i){function a(o,s){if(!n[o]){if(!e[o]){var l="function"==typeof require&&require;if(!s&&l)return require(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};e[o][0].call(d.exports,function(t){var n=e[o][1][t];return a(n?n:t)},d,d.exports,t,e,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=/(\w+)/,o=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l[u]+l[u],16)}else if(l=t.match(n)){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l.slice(2*u,2*u+2),16)}else if(l=t.match(i)){for(var u=0;u<o.length;u++)o[u]=parseInt(l[u+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var u=0;u<o.length;u++)o[u]=Math.round(2.55*parseFloat(l[u+1]));s=parseFloat(l[4])}else if(l=t.match(r)){if("transparent"==l[1])return[0,0,0,0];if(o=x[l[1]],!o)return}for(var u=0;u<o.length;u++)o[u]=y(o[u],0,255);return s=s||0==s?y(s,0,1):1,o[3]=s,o}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=y(parseInt(n[1]),0,360),r=y(parseFloat(n[2]),0,100),o=y(parseFloat(n[3]),0,100),s=y(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function r(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=y(parseInt(n[1]),0,360),r=y(parseFloat(n[2]),0,100),o=y(parseFloat(n[3]),0,100),s=y(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function o(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=r(t))?e[3]:void 0}function u(t){return"#"+b(t[0])+b(t[1])+b(t[2])}function d(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return e<1||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return _[t.slice(0,3)]}function y(t,e,n){return Math.min(Math.max(e,t),n)}function b(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t(5);e.exports={getRgba:i,getHsla:a,getRgb:o,getHsl:s,getHwb:r,getAlpha:l,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:v};var _={};for(var k in x)_[x[k]]=k},{5:5}],2:[function(t,e,n){var i=t(4),a=t(1),r=function(t){if(t instanceof r)return t;if(!(this instanceof r))return new r(t);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;"string"==typeof t?(e=a.getRgba(t),e?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e)):"object"==typeof t&&(e=t,void 0!==e.r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e))};r.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return e<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,r=2*a-1,o=n.alpha()-i.alpha(),s=((r*o===-1?r:(r+o)/(1+r*o))+1)/2,l=1-s;return this.rgb(s*n.red()+l*i.red(),s*n.green()+l*i.green(),s*n.blue()+l*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new r,i=this.values,a=n.values;for(var o in i)i.hasOwnProperty(o)&&(t=i[o],e={}.toString.call(t),"[object Array]"===e?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return n}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},r.prototype.setValues=function(t,e){var n,a=this.values,r=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(n=0;n<t.length;n++)a[t][n]=e[l[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in r)d!==t&&(a[d]=i[t][d](a[t]));return!0},r.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},r.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{1:1,4:4}],3:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,r=t[1]/255,o=t[2]/255,s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=(s+l)/2,n=l==s?0:i<=.5?u/(l+s):u/(2-l-s),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],r=t[1],o=t[2],s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return n=0==l?0:u/l*1e3/10,l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=l/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],r=i(t)[0],o=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[r,100*o,100*a]}function s(t){var e,n,i,a,r=t[0]/255,o=t[1]/255,s=t[2]/255;return a=Math.min(1-r,1-o,1-s),e=(1-r-a)/(1-a)||0,n=(1-o-a)/(1-a)||0,i=(1-s-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function l(t){return K[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,r=.2126*e+.7152*n+.0722*i,o=.0193*e+.1192*n+.9505*i;return[100*a,100*r,100*o]}function d(t){var e,n,i,a=u(t),r=a[0],o=a[1],s=a[2];return r/=95.047,o/=100,s/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*o-16,n=500*(r-o),i=200*(o-s),[e,n,i]}function c(t){return Y(d(t))}function h(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return r=255*l,[r,r,r];n=l<.5?l*(1+s):l+s-l*s,e=2*l-n,a=[0,0,0];for(var u=0;u<3;u++)i=o+1/3*-(u-1),i<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a}function f(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return 0===r?[0,0,0]:(r*=2,a*=r<=1?r:2-r,n=(r+a)/2,e=2*a/(r+a),[i,100*e,100*n])}function p(t){return o(h(t))}function m(t){return s(h(t))}function v(t){return l(h(t))}function y(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r)),i=255*i;switch(a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}}function x(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return n=(2-a)*r,e=a*r,e/=n<=1?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function _(t){return o(y(t))}function k(t){return s(y(t))}function w(t){return l(y(t))}function M(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),e=Math.floor(6*o),n=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function S(t){return i(M(t))}function D(t){return a(M(t))}function C(t){return s(M(t))}function P(t){return l(M(t))}function T(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,r*(1-s)+s),i=1-Math.min(1,o*(1-s)+s),[255*e,255*n,255*i]}function I(t){return i(T(t))}function A(t){return a(T(t))}function F(t){return o(T(t))}function O(t){return l(T(t))}function R(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return e=3.2406*a+r*-1.5372+o*-.4986,n=a*-.9689+1.8758*r+.0415*o,i=.0557*a+r*-.204+1.057*o,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function L(t){var e,n,i,a=t[0],r=t[1],o=t[2];return a/=95.047,r/=100,o/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,e=116*r-16,n=500*(a-r),i=200*(r-o),[e,n,i]}function V(t){return Y(L(t))}function W(t){var e,n,i,a,r=t[0],o=t[1],s=t[2];return r<=8?(n=100*r/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((r+16)/116,3),a=Math.pow(n/100,1/3)),e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i=i/108.883<=.008859?i=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,n,i]}function Y(t){var e,n,i,a=t[0],r=t[1],o=t[2];return e=Math.atan2(o,r),n=360*e/2/Math.PI,n<0&&(n+=360),i=Math.sqrt(r*r+o*o),[a,i,n]}function z(t){return R(W(t))}function N(t){var e,n,i,a=t[0],r=t[1],o=t[2];return i=o/360*2*Math.PI,e=r*Math.cos(i),n=r*Math.sin(i),[a,e,n]}function B(t){return W(N(t))}function E(t){return z(N(t))}function H(t){return J[t]}function j(t){return i(H(t))}function U(t){return a(H(t))}function G(t){return o(H(t))}function q(t){return s(H(t))}function Z(t){return d(H(t))}function X(t){return u(H(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:_,hsv2cmyk:k,hsv2keyword:w,hwb2rgb:M,hwb2hsl:S,hwb2hsv:D,hwb2cmyk:C,hwb2keyword:P,cmyk2rgb:T,cmyk2hsl:I,cmyk2hsv:A,cmyk2hwb:F,cmyk2keyword:O,keyword2rgb:H,keyword2hsl:j,keyword2hsv:U,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:X,xyz2rgb:R,xyz2lab:L,xyz2lch:V,lab2xyz:W,lab2rgb:z,lab2lch:Y,lch2lab:N,lch2xyz:B,lch2rgb:E};var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},K={};for(var Q in J)K[JSON.stringify(J[Q])]=Q},{}],4:[function(t,e,n){var i=t(3),a=function(){return new u};for(var r in i){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];a[s]=a[s]||{},a[s][l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{3:3}],5:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(e,n,i){!function(e,a){"object"==typeof i&&"undefined"!=typeof n?n.exports=a():"function"==typeof t&&t.amd?t(a):e.moment=a()}(this,function(){"use strict";function t(){return _i.apply(null,arguments)}function i(t){_i=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function o(t){var e;for(e in t)return!1;return!0}function s(t){return void 0===t}function l(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function u(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function d(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function c(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function h(t,e){for(var n in e)c(e,n)&&(t[n]=e[n]);return c(e,"toString")&&(t.toString=e.toString),c(e,"valueOf")&&(t.valueOf=e.valueOf),t}function f(t,e,n,i){return xe(t,e,n,i,!0).utc()}function g(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function p(t){return null==t._pf&&(t._pf=g()),t._pf}function m(t){if(null==t._isValid){var e=p(t),n=wi.call(e.parsedDateParts,function(t){return null!=t}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return i;t._isValid=i}return t._isValid}function v(t){var e=f(NaN);return null!=t?h(p(e),t):p(e).userInvalidated=!0,e}function y(t,e){var n,i,a;if(s(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),s(e._i)||(t._i=e._i),s(e._f)||(t._f=e._f),s(e._l)||(t._l=e._l),s(e._strict)||(t._strict=e._strict),s(e._tzm)||(t._tzm=e._tzm),s(e._isUTC)||(t._isUTC=e._isUTC),s(e._offset)||(t._offset=e._offset),s(e._pf)||(t._pf=p(e)),s(e._locale)||(t._locale=e._locale),Mi.length>0)for(n=0;n<Mi.length;n++)i=Mi[n],a=e[i],s(a)||(t[i]=a);return t}function b(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Si===!1&&(Si=!0,t.updateOffset(this),Si=!1)}function x(t){return t instanceof b||null!=t&&null!=t._isAMomentObject}function _(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function k(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=_(e)),n}function w(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;i<a;i++)(n&&t[i]!==e[i]||!n&&k(t[i])!==k(e[i]))&&o++;return o+r}function M(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function S(e,n){var i=!0;return h(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),i){for(var a,r=[],o=0;o<arguments.length;o++){if(a="","object"==typeof arguments[o]){a+="\n["+o+"] ";for(var s in arguments[0])a+=s+": "+arguments[0][s]+", ";a=a.slice(0,-2)}else a=arguments[o];r.push(a)}M(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function D(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),Di[e]||(M(n),Di[e]=!0)}function C(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function P(t){var e,n;for(n in t)e=t[n],C(e)?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function T(t,e){var n,i=h({},t);for(n in e)c(e,n)&&(r(t[n])&&r(e[n])?(i[n]={},h(i[n],t[n]),h(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)c(t,n)&&!c(e,n)&&r(t[n])&&(i[n]=h({},i[n]));return i}function I(t){null!=t&&this.set(t)}function A(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return C(i)?i.call(e,n):i}function F(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function O(){return this._invalidDate}function R(t){return this._ordinal.replace("%d",t)}function L(t,e,n,i){var a=this._relativeTime[n];return C(a)?a(t,e,n,i):a.replace(/%d/i,t)}function V(t,e){var n=this._relativeTime[t>0?"future":"past"];return C(n)?n(e):n.replace(/%s/i,e)}function W(t,e){var n=t.toLowerCase();Vi[n]=Vi[n+"s"]=Vi[e]=t}function Y(t){return"string"==typeof t?Vi[t]||Vi[t.toLowerCase()]:void 0}function z(t){var e,n,i={};for(n in t)c(t,n)&&(e=Y(n),e&&(i[e]=t[n]));return i}function N(t,e){Wi[t]=e}function B(t){var e=[];for(var n in t)e.push({unit:n,priority:Wi[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function E(e,n){return function(i){return null!=i?(j(this,e,i),t.updateOffset(this,n),this):H(this,e)}}function H(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function j(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function U(t){return t=Y(t),C(this[t])?this[t]():this}function G(t,e){if("object"==typeof t){t=z(t);for(var n=B(t),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])}else if(t=Y(t),C(this[t]))return this[t](e);return this}function q(t,e,n){var i=""+Math.abs(t),a=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}function Z(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(Bi[t]=a),e&&(Bi[e[0]]=function(){return q(a.apply(this,arguments),e[1],e[2])}),n&&(Bi[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function X(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function J(t){var e,n,i=t.match(Yi);for(e=0,n=i.length;e<n;e++)Bi[i[e]]?i[e]=Bi[i[e]]:i[e]=X(i[e]);return function(e){var a,r="";for(a=0;a<n;a++)r+=C(i[a])?i[a].call(e,t):i[a];return r}}function K(t,e){return t.isValid()?(e=Q(e,t.localeData()),Ni[e]=Ni[e]||J(e),Ni[e](t)):t.localeData().invalidDate()}function Q(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(zi.lastIndex=0;i>=0&&zi.test(t);)t=t.replace(zi,n),zi.lastIndex=0,i-=1;return t}function $(t,e,n){ra[t]=C(e)?e:function(t,i){return t&&n?n:e}}function tt(t,e){return c(ra,t)?ra[t](e._strict,e._locale):new RegExp(et(t))}function et(t){return nt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,a){return e||n||i||a}))}function nt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function it(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),l(e)&&(i=function(t,n){n[e]=k(t)}),n=0;n<t.length;n++)oa[t[n]]=i}function at(t,e){it(t,function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)})}function rt(t,e,n){null!=e&&c(oa,t)&&oa[t](e,n._a,n,t)}function ot(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function st(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||va).test(e)?"format":"standalone"][t.month()]:a(this._months)?this._months:this._months.standalone}function lt(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[va.test(e)?"format":"standalone"][t.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ut(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=f([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?(a=ma.call(this._shortMonthsParse,o),a!==-1?a:null):(a=ma.call(this._longMonthsParse,o),a!==-1?a:null):"MMM"===e?(a=ma.call(this._shortMonthsParse,o),a!==-1?a:(a=ma.call(this._longMonthsParse,o),a!==-1?a:null)):(a=ma.call(this._longMonthsParse,o),a!==-1?a:(a=ma.call(this._shortMonthsParse,o),a!==-1?a:null))}function dt(t,e,n){var i,a,r;if(this._monthsParseExact)return ut.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(a=f([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function ct(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=k(e);else if(e=t.localeData().monthsParse(e),
	!l(e))return t;return n=Math.min(t.date(),ot(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function ht(e){return null!=e?(ct(this,e),t.updateOffset(this,!0),this):H(this,"Month")}function ft(){return ot(this.year(),this.month())}function gt(t){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=xa),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function pt(t){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=_a),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function mt(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[];for(e=0;e<12;e++)n=f([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),r.sort(t),e=0;e<12;e++)i[e]=nt(i[e]),a[e]=nt(a[e]);for(e=0;e<24;e++)r[e]=nt(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function vt(t){return yt(t)?366:365}function yt(t){return t%4===0&&t%100!==0||t%400===0}function bt(){return yt(this.year())}function xt(t,e,n,i,a,r,o){var s=new Date(t,e,n,i,a,r,o);return t<100&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function _t(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function kt(t,e,n){var i=7+e-n,a=(7+_t(t,0,i).getUTCDay()-e)%7;return-a+i-1}function wt(t,e,n,i,a){var r,o,s=(7+n-i)%7,l=kt(t,i,a),u=1+7*(e-1)+s+l;return u<=0?(r=t-1,o=vt(r)+u):u>vt(t)?(r=t+1,o=u-vt(t)):(r=t,o=u),{year:r,dayOfYear:o}}function Mt(t,e,n){var i,a,r=kt(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return o<1?(a=t.year()-1,i=o+St(a,e,n)):o>St(t.year(),e,n)?(i=o-St(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function St(t,e,n){var i=kt(t,e,n),a=kt(t+1,e,n);return(vt(t)-i+a)/7}function Dt(t){return Mt(t,this._week.dow,this._week.doy).week}function Ct(){return this._week.dow}function Pt(){return this._week.doy}function Tt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function It(t){var e=Mt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function At(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Ft(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ot(t,e){return t?a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:a(this._weekdays)?this._weekdays:this._weekdays.standalone}function Rt(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Lt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Vt(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=f([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?(a=ma.call(this._weekdaysParse,o),a!==-1?a:null):"ddd"===e?(a=ma.call(this._shortWeekdaysParse,o),a!==-1?a:null):(a=ma.call(this._minWeekdaysParse,o),a!==-1?a:null):"dddd"===e?(a=ma.call(this._weekdaysParse,o),a!==-1?a:(a=ma.call(this._shortWeekdaysParse,o),a!==-1?a:(a=ma.call(this._minWeekdaysParse,o),a!==-1?a:null))):"ddd"===e?(a=ma.call(this._shortWeekdaysParse,o),a!==-1?a:(a=ma.call(this._weekdaysParse,o),a!==-1?a:(a=ma.call(this._minWeekdaysParse,o),a!==-1?a:null))):(a=ma.call(this._minWeekdaysParse,o),a!==-1?a:(a=ma.call(this._weekdaysParse,o),a!==-1?a:(a=ma.call(this._shortWeekdaysParse,o),a!==-1?a:null)))}function Wt(t,e,n){var i,a,r;if(this._weekdaysParseExact)return Vt.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(a=f([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function Yt(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=At(t,this.localeData()),this.add(t-e,"d")):e}function zt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Nt(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=Ft(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function Bt(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||jt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Ca),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Et(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||jt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Pa),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ht(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||jt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ta),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function jt(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],u=[];for(e=0;e<7;e++)n=f([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),u.push(i),u.push(a),u.push(r);for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;e<7;e++)s[e]=nt(s[e]),l[e]=nt(l[e]),u[e]=nt(u[e]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Ut(){return this.hours()%12||12}function Gt(){return this.hours()||24}function qt(t,e){Z(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function Zt(t,e){return e._meridiemParse}function Xt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Jt(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Kt(t){return t?t.toLowerCase().replace("_","-"):t}function Qt(t){for(var e,n,i,a,r=0;r<t.length;){for(a=Kt(t[r]).split("-"),e=a.length,n=Kt(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=$t(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&w(a,n,!0)>=e-1)break;e--}r++}return null}function $t(t){var i=null;if(!Ra[t]&&"undefined"!=typeof n&&n&&n.exports)try{i=Ia._abbr,e("./locale/"+t),te(i)}catch(t){}return Ra[t]}function te(t,e){var n;return t&&(n=s(e)?ie(t):ee(t,e),n&&(Ia=n)),Ia._abbr}function ee(t,e){if(null!==e){var n=Oa;if(e.abbr=t,null!=Ra[t])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ra[t]._config;else if(null!=e.parentLocale){if(null==Ra[e.parentLocale])return La[e.parentLocale]||(La[e.parentLocale]=[]),La[e.parentLocale].push({name:t,config:e}),null;n=Ra[e.parentLocale]._config}return Ra[t]=new I(T(n,e)),La[t]&&La[t].forEach(function(t){ee(t.name,t.config)}),te(t),Ra[t]}return delete Ra[t],null}function ne(t,e){if(null!=e){var n,i=Oa;null!=Ra[t]&&(i=Ra[t]._config),e=T(i,e),n=new I(e),n.parentLocale=Ra[t],Ra[t]=n,te(t)}else null!=Ra[t]&&(null!=Ra[t].parentLocale?Ra[t]=Ra[t].parentLocale:null!=Ra[t]&&delete Ra[t]);return Ra[t]}function ie(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Ia;if(!a(t)){if(e=$t(t))return e;t=[t]}return Qt(t)}function ae(){return Ti(Ra)}function re(t){var e,n=t._a;return n&&p(t).overflow===-2&&(e=n[la]<0||n[la]>11?la:n[ua]<1||n[ua]>ot(n[sa],n[la])?ua:n[da]<0||n[da]>24||24===n[da]&&(0!==n[ca]||0!==n[ha]||0!==n[fa])?da:n[ca]<0||n[ca]>59?ca:n[ha]<0||n[ha]>59?ha:n[fa]<0||n[fa]>999?fa:-1,p(t)._overflowDayOfYear&&(e<sa||e>ua)&&(e=ua),p(t)._overflowWeeks&&e===-1&&(e=ga),p(t)._overflowWeekday&&e===-1&&(e=pa),p(t).overflow=e),t}function oe(t){var e,n,i,a,r,o,s=t._i,l=Va.exec(s)||Wa.exec(s);if(l){for(p(t).iso=!0,e=0,n=za.length;e<n;e++)if(za[e][1].exec(l[1])){a=za[e][0],i=za[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=Na.length;e<n;e++)if(Na[e][1].exec(l[3])){r=(l[2]||" ")+Na[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!Ya.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),fe(t)}else t._isValid=!1}function se(t){var e,n,i,a,r,o,s,l,u={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},d="YXWVUTSRQPONZABCDEFGHIKLM";if(e=t._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),n=Ea.exec(e)){if(i=n[1]?"ddd"+(5===n[1].length?", ":" "):"",a="D MMM "+(n[2].length>10?"YYYY ":"YY "),r="HH:mm"+(n[4]?":ss":""),n[1]){var c=new Date(n[2]),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][c.getDay()];if(n[1].substr(0,3)!==h)return p(t).weekdayMismatch=!0,void(t._isValid=!1)}switch(n[5].length){case 2:0===l?s=" +0000":(l=d.indexOf(n[5][1].toUpperCase())-12,s=(l<0?" -":" +")+(""+l).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:s=u[n[5]];break;default:s=u[" GMT"]}n[5]=s,t._i=n.splice(1).join(""),o=" ZZ",t._f=i+a+r+o,fe(t),p(t).rfc2822=!0}else t._isValid=!1}function le(e){var n=Ba.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(oe(e),void(e._isValid===!1&&(delete e._isValid,se(e),e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e)))))}function ue(t,e,n){return null!=t?t:null!=e?e:n}function de(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function ce(t){var e,n,i,a,r=[];if(!t._d){for(i=de(t),t._w&&null==t._a[ua]&&null==t._a[la]&&he(t),null!=t._dayOfYear&&(a=ue(t._a[sa],i[sa]),(t._dayOfYear>vt(a)||0===t._dayOfYear)&&(p(t)._overflowDayOfYear=!0),n=_t(a,0,t._dayOfYear),t._a[la]=n.getUTCMonth(),t._a[ua]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;e<7;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[da]&&0===t._a[ca]&&0===t._a[ha]&&0===t._a[fa]&&(t._nextDay=!0,t._a[da]=0),t._d=(t._useUTC?_t:xt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[da]=24)}}function he(t){var e,n,i,a,r,o,s,l;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)r=1,o=4,n=ue(e.GG,t._a[sa],Mt(_e(),1,4).year),i=ue(e.W,1),a=ue(e.E,1),(a<1||a>7)&&(l=!0);else{r=t._locale._week.dow,o=t._locale._week.doy;var u=Mt(_e(),r,o);n=ue(e.gg,t._a[sa],u.year),i=ue(e.w,u.week),null!=e.d?(a=e.d,(a<0||a>6)&&(l=!0)):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r}i<1||i>St(n,r,o)?p(t)._overflowWeeks=!0:null!=l?p(t)._overflowWeekday=!0:(s=wt(n,i,a,r,o),t._a[sa]=s.year,t._dayOfYear=s.dayOfYear)}function fe(e){if(e._f===t.ISO_8601)return void oe(e);if(e._f===t.RFC_2822)return void se(e);e._a=[],p(e).empty=!0;var n,i,a,r,o,s=""+e._i,l=s.length,u=0;for(a=Q(e._f,e._locale).match(Yi)||[],n=0;n<a.length;n++)r=a[n],i=(s.match(tt(r,e))||[])[0],i&&(o=s.substr(0,s.indexOf(i)),o.length>0&&p(e).unusedInput.push(o),s=s.slice(s.indexOf(i)+i.length),u+=i.length),Bi[r]?(i?p(e).empty=!1:p(e).unusedTokens.push(r),rt(r,i,e)):e._strict&&!i&&p(e).unusedTokens.push(r);p(e).charsLeftOver=l-u,s.length>0&&p(e).unusedInput.push(s),e._a[da]<=12&&p(e).bigHour===!0&&e._a[da]>0&&(p(e).bigHour=void 0),p(e).parsedDateParts=e._a.slice(0),p(e).meridiem=e._meridiem,e._a[da]=ge(e._locale,e._a[da],e._meridiem),ce(e),re(e)}function ge(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&e<12&&(e+=12),i||12!==e||(e=0),e):e}function pe(t){var e,n,i,a,r;if(0===t._f.length)return p(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)r=0,e=y({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],fe(e),m(e)&&(r+=p(e).charsLeftOver,r+=10*p(e).unusedTokens.length,p(e).score=r,(null==i||r<i)&&(i=r,n=e));h(t,n||e)}function me(t){if(!t._d){var e=z(t._i);t._a=d([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),ce(t)}}function ve(t){var e=new b(re(ye(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function ye(t){var e=t._i,n=t._f;return t._locale=t._locale||ie(t._l),null===e||void 0===n&&""===e?v({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),x(e)?new b(re(e)):(u(e)?t._d=e:a(n)?pe(t):n?fe(t):be(t),m(t)||(t._d=null),t))}function be(e){var n=e._i;s(n)?e._d=new Date(t.now()):u(n)?e._d=new Date(n.valueOf()):"string"==typeof n?le(e):a(n)?(e._a=d(n.slice(0),function(t){return parseInt(t,10)}),ce(e)):r(n)?me(e):l(n)?e._d=new Date(n):t.createFromInputFallback(e)}function xe(t,e,n,i,s){var l={};return n!==!0&&n!==!1||(i=n,n=void 0),(r(t)&&o(t)||a(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=n,l._i=t,l._f=e,l._strict=i,ve(l)}function _e(t,e,n,i){return xe(t,e,n,i,!1)}function ke(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return _e();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}function we(){var t=[].slice.call(arguments,0);return ke("isBefore",t)}function Me(){var t=[].slice.call(arguments,0);return ke("isAfter",t)}function Se(t){for(var e in t)if(Ga.indexOf(e)===-1||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<Ga.length;++i)if(t[Ga[i]]){if(n)return!1;parseFloat(t[Ga[i]])!==k(t[Ga[i]])&&(n=!0)}return!0}function De(){return this._isValid}function Ce(){return Ge(NaN)}function Pe(t){var e=z(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._isValid=Se(e),this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=ie(),this._bubble()}function Te(t){return t instanceof Pe}function Ie(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function Ae(t,e){Z(t,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+q(~~(t/60),2)+e+q(~~t%60,2)})}function Fe(t,e){var n=(e||"").match(t);if(null===n)return null;var i=n[n.length-1]||[],a=(i+"").match(qa)||["-",0,0],r=+(60*a[1])+k(a[2]);return 0===r?0:"+"===a[0]?r:-r}function Oe(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(x(e)||u(e)?e.valueOf():_e(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),t.updateOffset(i,!1),i):_e(e).local()}function Re(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Le(e,n,i){var a,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=Fe(na,e),null===e)return this}else Math.abs(e)<16&&!i&&(e*=60);return!this._isUTC&&n&&(a=Re(this)),this._offset=e,this._isUTC=!0,null!=a&&this.add(a,"m"),r!==e&&(!n||this._changeInProgress?Ke(this,Ge(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Re(this)}function Ve(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function We(t){return this.utcOffset(0,t)}function Ye(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Re(this),"m")),this}function ze(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Fe(ea,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Ne(t){return!!this.isValid()&&(t=t?_e(t).utcOffset():0,(this.utcOffset()-t)%60===0)}function Be(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ee(){if(!s(this._isDSTShifted))return this._isDSTShifted;var t={};if(y(t,this),t=ye(t),t._a){var e=t._isUTC?f(t._a):_e(t._a);this._isDSTShifted=this.isValid()&&w(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function He(){return!!this.isValid()&&!this._isUTC}function je(){return!!this.isValid()&&this._isUTC}function Ue(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ge(t,e){var n,i,a,r=t,o=null;return Te(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:l(t)?(r={},e?r[e]=t:r.milliseconds=t):(o=Za.exec(t))?(n="-"===o[1]?-1:1,r={y:0,d:k(o[ua])*n,h:k(o[da])*n,m:k(o[ca])*n,s:k(o[ha])*n,ms:k(Ie(1e3*o[fa]))*n}):(o=Xa.exec(t))?(n="-"===o[1]?-1:1,r={y:qe(o[2],n),M:qe(o[3],n),w:qe(o[4],n),d:qe(o[5],n),h:qe(o[6],n),m:qe(o[7],n),s:qe(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(a=Xe(_e(r.from),_e(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),i=new Pe(r),Te(t)&&c(t,"_locale")&&(i._locale=t._locale),i}function qe(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ze(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Xe(t,e){var n;return t.isValid()&&e.isValid()?(e=Oe(e,t),t.isBefore(e)?n=Ze(t,e):(n=Ze(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Je(t,e){return function(n,i){var a,r;return null===i||isNaN(+i)||(D(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),n="string"==typeof n?+n:n,a=Ge(n,i),Ke(this,a,t),this}}function Ke(e,n,i,a){var r=n._milliseconds,o=Ie(n._days),s=Ie(n._months);e.isValid()&&(a=null==a||a,r&&e._d.setTime(e._d.valueOf()+r*i),o&&j(e,"Date",H(e,"Date")+o*i),s&&ct(e,H(e,"Month")+s*i),a&&t.updateOffset(e,o||s))}function Qe(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function $e(e,n){var i=e||_e(),a=Oe(i,this).startOf("day"),r=t.calendarFormat(this,a)||"sameElse",o=n&&(C(n[r])?n[r].call(this,i):n[r]);return this.format(o||this.localeData().calendar(r,this,_e(i)))}function tn(){return new b(this)}function en(t,e){var n=x(t)?t:_e(t);return!(!this.isValid()||!n.isValid())&&(e=Y(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())}function nn(t,e){var n=x(t)?t:_e(t);return!(!this.isValid()||!n.isValid())&&(e=Y(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())}function an(t,e,n,i){return i=i||"()",("("===i[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))}function rn(t,e){var n,i=x(t)?t:_e(t);return!(!this.isValid()||!i.isValid())&&(e=Y(e||"millisecond"),"millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))}function on(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function sn(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function ln(t,e,n){var i,a,r,o;return this.isValid()?(i=Oe(t,this),i.isValid()?(a=6e4*(i.utcOffset()-this.utcOffset()),e=Y(e),"year"===e||"month"===e||"quarter"===e?(o=un(this,i),"quarter"===e?o/=3:"year"===e&&(o/=12)):(r=this-i,o="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-a)/864e5:"week"===e?(r-a)/6048e5:r),n?o:_(o)):NaN):NaN}function un(t,e){var n,i,a=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(a,"months");return e-r<0?(n=t.clone().add(a-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(a+1,"months"),i=(e-r)/(n-r)),-(a+i)||0}function dn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function cn(){if(!this.isValid())return null;var t=this.clone().utc();return t.year()<0||t.year()>9999?K(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):C(Date.prototype.toISOString)?this.toDate().toISOString():K(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function hn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",r=e+'[")]';return this.format(n+i+a+r)}function fn(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=K(this,e);return this.localeData().postformat(n)}function gn(t,e){return this.isValid()&&(x(t)&&t.isValid()||_e(t).isValid())?Ge({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function pn(t){return this.from(_e(),t)}function mn(t,e){return this.isValid()&&(x(t)&&t.isValid()||_e(t).isValid())?Ge({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function vn(t){return this.to(_e(),t)}function yn(t){var e;return void 0===t?this._locale._abbr:(e=ie(t),null!=e&&(this._locale=e),this)}function bn(){return this._locale}function xn(t){switch(t=Y(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function _n(t){return t=Y(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function kn(){return this._d.valueOf()-6e4*(this._offset||0)}function wn(){return Math.floor(this.valueOf()/1e3)}function Mn(){return new Date(this.valueOf())}function Sn(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Dn(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Cn(){return this.isValid()?this.toISOString():null}function Pn(){return m(this)}function Tn(){return h({},p(this))}function In(){return p(this).overflow}function An(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Fn(t,e){Z(0,[t,t.length],0,e)}function On(t){return Wn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rn(t){return Wn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ln(){return St(this.year(),1,4)}function Vn(){var t=this.localeData()._week;return St(this.year(),t.dow,t.doy)}function Wn(t,e,n,i,a){var r;return null==t?Mt(this,i,a).year:(r=St(t,i,a),e>r&&(e=r),Yn.call(this,t,e,n,i,a))}function Yn(t,e,n,i,a){var r=wt(t,e,n,i,a),o=_t(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function zn(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Nn(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Bn(t,e){e[fa]=k(1e3*("0."+t))}function En(){return this._isUTC?"UTC":""}function Hn(){return this._isUTC?"Coordinated Universal Time":""}function jn(t){return _e(1e3*t)}function Un(){return _e.apply(null,arguments).parseZone()}function Gn(t){return t}function qn(t,e,n,i){var a=ie(),r=f().set(i,e);return a[n](r,t)}function Zn(t,e,n){if(l(t)&&(e=t,t=void 0),t=t||"",null!=e)return qn(t,e,n,"month");var i,a=[];for(i=0;i<12;i++)a[i]=qn(t,i,n,"month");return a}function Xn(t,e,n,i){"boolean"==typeof t?(l(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,l(e)&&(n=e,e=void 0),e=e||"");var a=ie(),r=t?a._week.dow:0;if(null!=n)return qn(e,(n+r)%7,i,"day");var o,s=[];for(o=0;o<7;o++)s[o]=qn(e,(o+r)%7,i,"day");return s}function Jn(t,e){return Zn(t,e,"months")}function Kn(t,e){return Zn(t,e,"monthsShort")}function Qn(t,e,n){return Xn(t,e,n,"weekdays")}function $n(t,e,n){return Xn(t,e,n,"weekdaysShort")}function ti(t,e,n){return Xn(t,e,n,"weekdaysMin")}function ei(){var t=this._data;return this._milliseconds=or(this._milliseconds),this._days=or(this._days),this._months=or(this._months),t.milliseconds=or(t.milliseconds),t.seconds=or(t.seconds),t.minutes=or(t.minutes),t.hours=or(t.hours),t.months=or(t.months),t.years=or(t.years),this}function ni(t,e,n,i){var a=Ge(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function ii(t,e){return ni(this,t,e,1)}function ai(t,e){return ni(this,t,e,-1)}function ri(t){return t<0?Math.floor(t):Math.ceil(t)}function oi(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return r>=0&&o>=0&&s>=0||r<=0&&o<=0&&s<=0||(r+=864e5*ri(li(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=_(r/1e3),l.seconds=t%60,e=_(t/60),l.minutes=e%60,n=_(e/60),l.hours=n%24,o+=_(n/24),a=_(si(o)),s+=a,o-=ri(li(a)),i=_(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function si(t){return 4800*t/146097}function li(t){return 146097*t/4800}function ui(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if(t=Y(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+si(e),"month"===t?n:n/12;switch(e=this._days+Math.round(li(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function di(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN}function ci(t){return function(){return this.as(t)}}function hi(t){return t=Y(t),this.isValid()?this[t+"s"]():NaN}function fi(t){return function(){return this.isValid()?this._data[t]:NaN}}function gi(){return _(this.days()/7)}function pi(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}function mi(t,e,n){var i=Ge(t).abs(),a=kr(i.as("s")),r=kr(i.as("m")),o=kr(i.as("h")),s=kr(i.as("d")),l=kr(i.as("M")),u=kr(i.as("y")),d=a<=wr.ss&&["s",a]||a<wr.s&&["ss",a]||r<=1&&["m"]||r<wr.m&&["mm",r]||o<=1&&["h"]||o<wr.h&&["hh",o]||s<=1&&["d"]||s<wr.d&&["dd",s]||l<=1&&["M"]||l<wr.M&&["MM",l]||u<=1&&["y"]||["yy",u];return d[2]=e,d[3]=+t>0,d[4]=n,pi.apply(null,d)}function vi(t){return void 0===t?kr:"function"==typeof t&&(kr=t,!0)}function yi(t,e){return void 0!==wr[t]&&(void 0===e?wr[t]:(wr[t]=e,"s"===t&&(wr.ss=e-1),!0))}function bi(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),n=mi(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function xi(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n,i=Mr(this._milliseconds)/1e3,a=Mr(this._days),r=Mr(this._months);t=_(i/60),e=_(t/60),i%=60,t%=60,n=_(r/12),r%=12;var o=n,s=r,l=a,u=e,d=t,c=i,h=this.asSeconds();return h?(h<0?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(u||d||c?"T":"")+(u?u+"H":"")+(d?d+"M":"")+(c?c+"S":""):"P0D"}var _i,ki;ki=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var wi=ki,Mi=t.momentProperties=[],Si=!1,Di={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var Ci;Ci=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)c(t,e)&&n.push(e);return n};var Pi,Ti=Ci,Ii={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ai={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Fi="Invalid date",Oi="%d",Ri=/\d{1,2}/,Li={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vi={},Wi={},Yi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,zi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ni={},Bi={},Ei=/\d/,Hi=/\d\d/,ji=/\d{3}/,Ui=/\d{4}/,Gi=/[+-]?\d{6}/,qi=/\d\d?/,Zi=/\d\d\d\d?/,Xi=/\d\d\d\d\d\d?/,Ji=/\d{1,3}/,Ki=/\d{1,4}/,Qi=/[+-]?\d{1,6}/,$i=/\d+/,ta=/[+-]?\d+/,ea=/Z|[+-]\d\d:?\d\d/gi,na=/Z|[+-]\d\d(?::?\d\d)?/gi,ia=/[+-]?\d+(\.\d{1,3})?/,aa=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ra={},oa={},sa=0,la=1,ua=2,da=3,ca=4,ha=5,fa=6,ga=7,pa=8;Pi=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};var ma=Pi;Z("M",["MM",2],"Mo",function(){return this.month()+1}),Z("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),Z("MMMM",0,0,function(t){return this.localeData().months(this,t)}),W("month","M"),N("month",8),$("M",qi),$("MM",qi,Hi),$("MMM",function(t,e){return e.monthsShortRegex(t)}),$("MMMM",function(t,e){return e.monthsRegex(t)}),it(["M","MM"],function(t,e){e[la]=k(t)-1}),it(["MMM","MMMM"],function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[la]=a:p(n).invalidMonth=t});var va=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ya="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ba="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),xa=aa,_a=aa;Z("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),Z(0,["YY",2],0,function(){return this.year()%100}),Z(0,["YYYY",4],0,"year"),Z(0,["YYYYY",5],0,"year"),Z(0,["YYYYYY",6,!0],0,"year"),W("year","y"),N("year",1),$("Y",ta),$("YY",qi,Hi),$("YYYY",Ki,Ui),$("YYYYY",Qi,Gi),$("YYYYYY",Qi,Gi),it(["YYYYY","YYYYYY"],sa),it("YYYY",function(e,n){n[sa]=2===e.length?t.parseTwoDigitYear(e):k(e)}),it("YY",function(e,n){n[sa]=t.parseTwoDigitYear(e)}),it("Y",function(t,e){e[sa]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return k(t)+(k(t)>68?1900:2e3)};var ka=E("FullYear",!0);Z("w",["ww",2],"wo","week"),Z("W",["WW",2],"Wo","isoWeek"),W("week","w"),W("isoWeek","W"),N("week",5),N("isoWeek",5),$("w",qi),$("ww",qi,Hi),$("W",qi),$("WW",qi,Hi),at(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=k(t)});var wa={dow:0,doy:6};Z("d",0,"do","day"),Z("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),Z("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),Z("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),Z("e",0,0,"weekday"),Z("E",0,0,"isoWeekday"),W("day","d"),W("weekday","e"),W("isoWeekday","E"),N("day",11),N("weekday",11),N("isoWeekday",11),$("d",qi),$("e",qi),$("E",qi),$("dd",function(t,e){return e.weekdaysMinRegex(t)}),$("ddd",function(t,e){return e.weekdaysShortRegex(t)}),$("dddd",function(t,e){return e.weekdaysRegex(t)}),at(["dd","ddd","dddd"],function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:p(n).invalidWeekday=t;
	}),at(["d","e","E"],function(t,e,n,i){e[i]=k(t)});var Ma="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Sa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Da="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ca=aa,Pa=aa,Ta=aa;Z("H",["HH",2],0,"hour"),Z("h",["hh",2],0,Ut),Z("k",["kk",2],0,Gt),Z("hmm",0,0,function(){return""+Ut.apply(this)+q(this.minutes(),2)}),Z("hmmss",0,0,function(){return""+Ut.apply(this)+q(this.minutes(),2)+q(this.seconds(),2)}),Z("Hmm",0,0,function(){return""+this.hours()+q(this.minutes(),2)}),Z("Hmmss",0,0,function(){return""+this.hours()+q(this.minutes(),2)+q(this.seconds(),2)}),qt("a",!0),qt("A",!1),W("hour","h"),N("hour",13),$("a",Zt),$("A",Zt),$("H",qi),$("h",qi),$("k",qi),$("HH",qi,Hi),$("hh",qi,Hi),$("kk",qi,Hi),$("hmm",Zi),$("hmmss",Xi),$("Hmm",Zi),$("Hmmss",Xi),it(["H","HH"],da),it(["k","kk"],function(t,e,n){var i=k(t);e[da]=24===i?0:i}),it(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),it(["h","hh"],function(t,e,n){e[da]=k(t),p(n).bigHour=!0}),it("hmm",function(t,e,n){var i=t.length-2;e[da]=k(t.substr(0,i)),e[ca]=k(t.substr(i)),p(n).bigHour=!0}),it("hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[da]=k(t.substr(0,i)),e[ca]=k(t.substr(i,2)),e[ha]=k(t.substr(a)),p(n).bigHour=!0}),it("Hmm",function(t,e,n){var i=t.length-2;e[da]=k(t.substr(0,i)),e[ca]=k(t.substr(i))}),it("Hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[da]=k(t.substr(0,i)),e[ca]=k(t.substr(i,2)),e[ha]=k(t.substr(a))});var Ia,Aa=/[ap]\.?m?\.?/i,Fa=E("Hours",!0),Oa={calendar:Ii,longDateFormat:Ai,invalidDate:Fi,ordinal:Oi,dayOfMonthOrdinalParse:Ri,relativeTime:Li,months:ya,monthsShort:ba,week:wa,weekdays:Ma,weekdaysMin:Da,weekdaysShort:Sa,meridiemParse:Aa},Ra={},La={},Va=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wa=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ya=/Z|[+-]\d\d(?::?\d\d)?/,za=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Na=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ba=/^\/?Date\((\-?\d+)/i,Ea=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;t.createFromInputFallback=S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),t.ISO_8601=function(){},t.RFC_2822=function(){};var Ha=S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=_e.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:v()}),ja=S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=_e.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:v()}),Ua=function(){return Date.now?Date.now():+new Date},Ga=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ae("Z",":"),Ae("ZZ",""),$("Z",na),$("ZZ",na),it(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Fe(na,t)});var qa=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Za=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Xa=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ge.fn=Pe.prototype,Ge.invalid=Ce;var Ja=Je(1,"add"),Ka=Je(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Qa=S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});Z(0,["gg",2],0,function(){return this.weekYear()%100}),Z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Fn("gggg","weekYear"),Fn("ggggg","weekYear"),Fn("GGGG","isoWeekYear"),Fn("GGGGG","isoWeekYear"),W("weekYear","gg"),W("isoWeekYear","GG"),N("weekYear",1),N("isoWeekYear",1),$("G",ta),$("g",ta),$("GG",qi,Hi),$("gg",qi,Hi),$("GGGG",Ki,Ui),$("gggg",Ki,Ui),$("GGGGG",Qi,Gi),$("ggggg",Qi,Gi),at(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=k(t)}),at(["gg","GG"],function(e,n,i,a){n[a]=t.parseTwoDigitYear(e)}),Z("Q",0,"Qo","quarter"),W("quarter","Q"),N("quarter",7),$("Q",Ei),it("Q",function(t,e){e[la]=3*(k(t)-1)}),Z("D",["DD",2],"Do","date"),W("date","D"),N("date",9),$("D",qi),$("DD",qi,Hi),$("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),it(["D","DD"],ua),it("Do",function(t,e){e[ua]=k(t.match(qi)[0],10)});var $a=E("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear"),W("dayOfYear","DDD"),N("dayOfYear",4),$("DDD",Ji),$("DDDD",ji),it(["DDD","DDDD"],function(t,e,n){n._dayOfYear=k(t)}),Z("m",["mm",2],0,"minute"),W("minute","m"),N("minute",14),$("m",qi),$("mm",qi,Hi),it(["m","mm"],ca);var tr=E("Minutes",!1);Z("s",["ss",2],0,"second"),W("second","s"),N("second",15),$("s",qi),$("ss",qi,Hi),it(["s","ss"],ha);var er=E("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)}),Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Z(0,["SSS",3],0,"millisecond"),Z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),Z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),Z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),Z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),Z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),Z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),W("millisecond","ms"),N("millisecond",16),$("S",Ji,Ei),$("SS",Ji,Hi),$("SSS",Ji,ji);var nr;for(nr="SSSS";nr.length<=9;nr+="S")$(nr,$i);for(nr="S";nr.length<=9;nr+="S")it(nr,Bn);var ir=E("Milliseconds",!1);Z("z",0,0,"zoneAbbr"),Z("zz",0,0,"zoneName");var ar=b.prototype;ar.add=Ja,ar.calendar=$e,ar.clone=tn,ar.diff=ln,ar.endOf=_n,ar.format=fn,ar.from=gn,ar.fromNow=pn,ar.to=mn,ar.toNow=vn,ar.get=U,ar.invalidAt=In,ar.isAfter=en,ar.isBefore=nn,ar.isBetween=an,ar.isSame=rn,ar.isSameOrAfter=on,ar.isSameOrBefore=sn,ar.isValid=Pn,ar.lang=Qa,ar.locale=yn,ar.localeData=bn,ar.max=ja,ar.min=Ha,ar.parsingFlags=Tn,ar.set=G,ar.startOf=xn,ar.subtract=Ka,ar.toArray=Sn,ar.toObject=Dn,ar.toDate=Mn,ar.toISOString=cn,ar.inspect=hn,ar.toJSON=Cn,ar.toString=dn,ar.unix=wn,ar.valueOf=kn,ar.creationData=An,ar.year=ka,ar.isLeapYear=bt,ar.weekYear=On,ar.isoWeekYear=Rn,ar.quarter=ar.quarters=zn,ar.month=ht,ar.daysInMonth=ft,ar.week=ar.weeks=Tt,ar.isoWeek=ar.isoWeeks=It,ar.weeksInYear=Vn,ar.isoWeeksInYear=Ln,ar.date=$a,ar.day=ar.days=Yt,ar.weekday=zt,ar.isoWeekday=Nt,ar.dayOfYear=Nn,ar.hour=ar.hours=Fa,ar.minute=ar.minutes=tr,ar.second=ar.seconds=er,ar.millisecond=ar.milliseconds=ir,ar.utcOffset=Le,ar.utc=We,ar.local=Ye,ar.parseZone=ze,ar.hasAlignedHourOffset=Ne,ar.isDST=Be,ar.isLocal=He,ar.isUtcOffset=je,ar.isUtc=Ue,ar.isUTC=Ue,ar.zoneAbbr=En,ar.zoneName=Hn,ar.dates=S("dates accessor is deprecated. Use date instead.",$a),ar.months=S("months accessor is deprecated. Use month instead",ht),ar.years=S("years accessor is deprecated. Use year instead",ka),ar.zone=S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ve),ar.isDSTShifted=S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ee);var rr=I.prototype;rr.calendar=A,rr.longDateFormat=F,rr.invalidDate=O,rr.ordinal=R,rr.preparse=Gn,rr.postformat=Gn,rr.relativeTime=L,rr.pastFuture=V,rr.set=P,rr.months=st,rr.monthsShort=lt,rr.monthsParse=dt,rr.monthsRegex=pt,rr.monthsShortRegex=gt,rr.week=Dt,rr.firstDayOfYear=Pt,rr.firstDayOfWeek=Ct,rr.weekdays=Ot,rr.weekdaysMin=Lt,rr.weekdaysShort=Rt,rr.weekdaysParse=Wt,rr.weekdaysRegex=Bt,rr.weekdaysShortRegex=Et,rr.weekdaysMinRegex=Ht,rr.isPM=Xt,rr.meridiem=Jt,te("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===k(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=S("moment.lang is deprecated. Use moment.locale instead.",te),t.langData=S("moment.langData is deprecated. Use moment.localeData instead.",ie);var or=Math.abs,sr=ci("ms"),lr=ci("s"),ur=ci("m"),dr=ci("h"),cr=ci("d"),hr=ci("w"),fr=ci("M"),gr=ci("y"),pr=fi("milliseconds"),mr=fi("seconds"),vr=fi("minutes"),yr=fi("hours"),br=fi("days"),xr=fi("months"),_r=fi("years"),kr=Math.round,wr={ss:44,s:45,m:45,h:22,d:26,M:11},Mr=Math.abs,Sr=Pe.prototype;return Sr.isValid=De,Sr.abs=ei,Sr.add=ii,Sr.subtract=ai,Sr.as=ui,Sr.asMilliseconds=sr,Sr.asSeconds=lr,Sr.asMinutes=ur,Sr.asHours=dr,Sr.asDays=cr,Sr.asWeeks=hr,Sr.asMonths=fr,Sr.asYears=gr,Sr.valueOf=di,Sr._bubble=oi,Sr.get=hi,Sr.milliseconds=pr,Sr.seconds=mr,Sr.minutes=vr,Sr.hours=yr,Sr.days=br,Sr.weeks=gi,Sr.months=xr,Sr.years=_r,Sr.humanize=bi,Sr.toISOString=xi,Sr.toString=xi,Sr.toJSON=xi,Sr.locale=yn,Sr.localeData=bn,Sr.toIsoString=S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",xi),Sr.lang=Qa,Z("X",0,0,"unix"),Z("x",0,0,"valueOf"),$("x",ta),$("X",ia),it("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),it("x",function(t,e,n){n._d=new Date(k(t))}),t.version="2.18.1",i(_e),t.fn=ar,t.min=we,t.max=Me,t.now=Ua,t.utc=f,t.unix=jn,t.months=Jn,t.isDate=u,t.locale=te,t.invalid=v,t.duration=Ge,t.isMoment=x,t.weekdays=Qn,t.parseZone=Un,t.localeData=ie,t.isDuration=Te,t.monthsShort=Kn,t.weekdaysMin=ti,t.defineLocale=ee,t.updateLocale=ne,t.locales=ae,t.weekdaysShort=$n,t.normalizeUnits=Y,t.relativeTimeRounding=vi,t.relativeTimeThreshold=yi,t.calendarFormat=Qe,t.prototype=ar,t})},{}],7:[function(t,e,n){var i=t(28)();t(26)(i),t(40)(i),t(22)(i),t(25)(i),t(30)(i),t(21)(i),t(23)(i),t(24)(i),t(29)(i),t(32)(i),t(33)(i),t(31)(i),t(27)(i),t(34)(i),t(35)(i),t(36)(i),t(37)(i),t(38)(i),t(46)(i),t(44)(i),t(45)(i),t(47)(i),t(48)(i),t(49)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i);var a=[];a.push(t(41)(i),t(42)(i),t(43)(i)),i.plugins.register(a),e.exports=i,"undefined"!=typeof window&&(window.Chart=i)},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),e=n.getMeta(),e.stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,i=this,a=i.getMeta().data;for(i._ruler=i.getRuler(),e=0,n=a.length;e<n;++e)i.updateElement(a[e],e,t)},updateElement:function(t,n,i){var a=this,r=a.chart,o=a.getMeta(),s=a.getDataset(),l=t.custom||{},u=r.options.elements.rectangle;t._xScale=a.getScaleForId(o.xAxisID),t._yScale=a.getScaleForId(o.yAxisID),t._datasetIndex=a.index,t._index=n,t._model={datasetLabel:s.label,label:r.data.labels[n],borderSkipped:l.borderSkipped?l.borderSkipped:u.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:e.getValueAtIndexOrDefault(s.backgroundColor,n,u.backgroundColor),borderColor:l.borderColor?l.borderColor:e.getValueAtIndexOrDefault(s.borderColor,n,u.borderColor),borderWidth:l.borderWidth?l.borderWidth:e.getValueAtIndexOrDefault(s.borderWidth,n,u.borderWidth)},a.updateElementGeometry(t,n,i),t.pivot()},updateElementGeometry:function(t,e,n){var i=this,a=t._model,r=i.getValueScale(),o=r.getBasePixel(),s=r.isHorizontal(),l=i._ruler||i.getRuler(),u=i.calculateBarValuePixels(i.index,e),d=i.calculateBarIndexPixels(i.index,e,l);a.horizontal=s,a.base=n?o:u.base,a.x=s?n?o:u.head:d.center,a.y=s?d.center:n?o:u.head,a.height=s?d.size:void 0,a.width=s?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(t){var e,n,i=this,a=i.chart,r=i.getIndexScale(),o=r.options.stacked,s=void 0===t?a.data.datasets.length:t+1,l=[];for(e=0;e<s;++e)n=a.getDatasetMeta(e),n.bar&&a.isDatasetVisible(e)&&(o===!1||o===!0&&l.indexOf(n.stack)===-1||void 0===o&&(void 0===n.stack||l.indexOf(n.stack)===-1))&&l.push(n.stack);return l.length},getStackIndex:function(t){return this.getStackCount(t)-1},getRuler:function(){var t=this,n=t.getIndexScale(),i=n.options,a=t.getStackCount(),r=n.isHorizontal()?n.width:n.height,o=r/n.ticks.length,s=o*i.categoryPercentage,l=s/a,u=l*i.barPercentage;return u=Math.min(e.getValueOrDefault(i.barThickness,u),e.getValueOrDefault(i.maxBarThickness,1/0)),{stackCount:a,tickSize:o,categorySize:s,categorySpacing:o-s,fullBarSize:l,barSize:u,barSpacing:l-u,scale:n}},calculateBarValuePixels:function(t,e){var n,i,a,r,o,s,l=this,u=l.chart,d=l.getMeta(),c=l.getValueScale(),h=u.data.datasets,f=Number(h[t].data[e]),g=c.options.stacked,p=d.stack,m=0;if(g||void 0===g&&void 0!==p)for(n=0;n<t;++n)i=u.getDatasetMeta(n),i.bar&&i.stack===p&&i.controller.getValueScaleId()===c.id&&u.isDatasetVisible(n)&&(a=Number(h[n].data[e]),(f<0&&a<0||f>=0&&a>0)&&(m+=a));return r=c.getPixelForValue(m),o=c.getPixelForValue(m+f),s=(o-r)/2,{size:s,base:r,head:o,center:o+s/2}},calculateBarIndexPixels:function(t,e,n){var i=this,a=n.scale,r=i.chart.isCombo,o=i.getStackIndex(t),s=a.getPixelForValue(null,e,t,r),l=n.barSize;return s-=r?n.tickSize/2:0,s+=n.fullBarSize*o,s+=n.categorySpacing/2,s+=n.barSpacing/2,{size:l,base:s,head:s+l,center:s+l/2}},draw:function(){var t,n=this,i=n.chart,a=n.getMeta().data,r=n.getDataset(),o=a.length,s=0;for(e.canvas.clipArea(i.ctx,i.chartArea);s<o;++s)t=r.data[s],null===t||void 0===t||isNaN(t)||a[s].draw();e.canvas.unclipArea(i.ctx)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model,o=this.chart.options.elements.rectangle;r.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,o.backgroundColor),r.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,o.borderColor),r.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,o.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var r=this,o=r.getMeta(),s=r.getScaleForId(o.xAxisID),l=r.getScaleForId(o.yAxisID),u=n.custom||{},d=r.getDataset(),c=d.data[i],h=r.chart.options.elements.point,f=r.index;e.extend(n,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:a?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,i,f,r.chart.isCombo),y:a?l.getBasePixel():l.getPixelForValue(c,i,f),radius:a?0:u.radius?u.radius:r.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(r,n,h);var g=n._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],r=n._index,o=n.custom||{},s=n._model;s.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,r,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[r])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},r=e._model;r.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s&&s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)a=o.getDatasetMeta(n),a.data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,n){var i=n.labels[t.index],a=": "+n.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=a):i+=a,i}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,r=i.options,o=r.elements.arc,s=a.right-a.left-o.borderWidth,l=a.bottom-a.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=n.getMeta(),h=r.cutoutPercentage,f=r.circumference;if(f<2*Math.PI){var g=r.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(p),y:Math.sin(p)},y=g<=0&&0<=p||g<=2*Math.PI&&2*Math.PI<=p,b=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,x=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,_=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,k=h/100,w={x:x?-1:Math.min(m.x*(m.x<0?1:k),v.x*(v.x<0?1:k)),y:_?-1:Math.min(m.y*(m.y<0?1:k),v.y*(v.y<0?1:k))},M={x:y?1:Math.max(m.x*(m.x>0?1:k),v.x*(v.x>0?1:k)),y:b?1:Math.max(m.y*(m.y>0?1:k),v.y*(v.y>0?1:k))},S={width:.5*(M.x-w.x),height:.5*(M.y-w.y)};u=Math.min(s/S.width,l/S.height),d={x:(M.x+w.x)*-.5,y:(M.y+w.y)*-.5}}i.borderWidth=n.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=Math.max(n.outerRadius-i.radiusLength,0),e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,r=a.chart,o=r.chartArea,s=r.options,l=s.animation,u=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,f=a.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(s.circumference/(2*Math.PI)),p=i&&l.animateScale?0:a.innerRadius,m=i&&l.animateScale?0:a.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:u+r.offsetX,y:d+r.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:v(f.label,n,r.data.labels[n])}});var y=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===n?y.startAngle=s.rotation:y.startAngle=a.getMeta().data[n-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,r=t.length,o=0;o<r;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0,i=e>i?e:i,i=n>i?n:i;return i}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,a,r,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],d=o.chart.options,c=d.elements.line,h=o.getScaleForId(s.yAxisID),f=o.getDataset(),g=e(f,d);for(g&&(r=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:r.tension?r.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:r.backgroundColor?r.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:f.borderWidth||c.borderWidth,borderColor:r.borderColor?r.borderColor:f.borderColor||c.borderColor,borderCapStyle:r.borderCapStyle?r.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:r.borderDash?r.borderDash:f.borderDash||c.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:r.fill?r.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:r.steppedLine?r.steppedLine:n.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:r.cubicInterpolationMode?r.cubicInterpolationMode:n.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode)},l.pivot()),i=0,a=u.length;i<a;++i)o.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&o.updateBezierControlPoints(),i=0,a=u.length;i<a;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),r=t.custom||{};return r.backgroundColor?i=r.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),r=t.custom||{};return r.borderColor?i=r.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),r=t.custom||{};return isNaN(r.borderWidth)?isNaN(a.pointBorderWidth)?isNaN(a.borderWidth)||(i=a.borderWidth):i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):i=r.borderWidth,i},updateElement:function(t,e,i){var a,r,o=this,s=o.getMeta(),l=t.custom||{},u=o.getDataset(),d=o.index,c=u.data[e],h=o.getScaleForId(s.yAxisID),f=o.getScaleForId(s.xAxisID),g=o.chart.options.elements.point,p=o.chart.data.labels||[],m=1===p.length||1===u.data.length||o.chart.isCombo;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),a=f.getPixelForValue("object"==typeof c?c:NaN,e,d,m),r=i?h.getBasePixel():o.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:a,y:r,skip:l.skip||isNaN(a)||isNaN(r),radius:l.radius||n.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||n.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||n.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,r,o=this,s=o.chart,l=o.getMeta(),u=o.getScaleForId(l.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;i<n;i++)if(a=s.data.datasets[i],r=s.getDatasetMeta(i),"line"===r.type&&r.yAxisID===u.id&&s.isDatasetVisible(i)){var h=Number(u.getRightValue(a.data[e]));h<0?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return f<0?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,i,a,r,o,s=this,l=s.getMeta(),u=s.chart.chartArea,d=l.data||[];if(l.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(d);else for(e=0,i=d.length;e<i;++e)a=d[e],r=a._model,o=n.splineCurve(n.previousItem(d,e)._model,r,n.nextItem(d,e)._model,l.dataset._model.tension),r.controlPointPreviousX=o.previous.x,r.controlPointPreviousY=o.previous.y,r.controlPointNextX=o.next.x,r.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,i=d.length;e<i;++e)r=d[e]._model,r.controlPointPreviousX=t(r.controlPointPreviousX,u.left,u.right),r.controlPointPreviousY=t(r.controlPointPreviousY,u.top,u.bottom),r.controlPointNextX=t(r.controlPointNextX,u.left,u.right),r.controlPointNextY=t(r.controlPointNextY,u.top,u.bottom)},draw:function(){var n=this,i=n.chart,a=n.getMeta(),r=a.data||[],o=i.chartArea,s=r.length,l=0;for(t.canvasHelpers.clipArea(i.ctx,o),e(n.getDataset(),i.options)&&a.dataset.draw(),t.canvasHelpers.unclipArea(i.ctx);l<s;++l)r[l].draw(o)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),r.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),o.radius=r.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,a),o.borderColor=e.getPointBorderColor(t,a),o.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)a=o.getDatasetMeta(n),a.data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){
	return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,r=n.getMeta(),o=i.options,s=o.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(o.cutoutPercentage?i.outerRadius/100*o.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,r.count=n.countVisibleElements(),e.each(r.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,r=a.chart,o=a.getDataset(),s=r.options,l=s.animation,u=r.scale,d=e.getValueAtIndexOrDefault,c=r.data.labels,h=a.calculateCircumference(o.data[n]),f=u.xCenter,g=u.yCenter,p=0,m=a.getMeta(),v=0;v<n;++v)isNaN(o.data[v])||m.data[v].hidden||++p;var y=s.startAngle,b=t.hidden?0:u.getDistanceFromCenterForValue(o.data[n]),x=y+h*p,_=x+(t.hidden?0:h),k=l.animateScale?0:u.getDistanceFromCenterForValue(o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:u,_model:{x:f,y:g,innerRadius:0,outerRadius:i?k:b,startAngle:i&&l.animateRotate?y:x,endAngle:i&&l.animateRotate?y:_,label:d(c,n,c[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var n=this,i=n.getMeta(),a=i.dataset,r=i.data,o=a.custom||{},s=n.getDataset(),l=n.chart.options.elements.line,u=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:n.index,_scale:u,_children:r,_loop:!0,_model:{tension:o.tension?o.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),i.dataset.pivot(),e.each(r,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,r=t.custom||{},o=a.getDataset(),s=a.chart.scale,l=a.chart.options.elements.point,u=s.getPointPositionForValue(n,o.data[n]);void 0!==o.radius&&void 0===o.pointRadius&&(o.pointRadius=o.radius),void 0!==o.hitRadius&&void 0===o.pointHitRadius&&(o.pointHitRadius=o.hitRadius),e.extend(t,{_datasetIndex:a.index,_index:n,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:r.tension?r.tension:e.getValueOrDefault(o.lineTension,a.chart.options.elements.line.tension),radius:r.radius?r.radius:e.getValueAtIndexOrDefault(o.pointRadius,n,l.radius),backgroundColor:r.backgroundColor?r.backgroundColor:e.getValueAtIndexOrDefault(o.pointBackgroundColor,n,l.backgroundColor),borderColor:r.borderColor?r.borderColor:e.getValueAtIndexOrDefault(o.pointBorderColor,n,l.borderColor),borderWidth:r.borderWidth?r.borderWidth:e.getValueAtIndexOrDefault(o.pointBorderWidth,n,l.borderWidth),pointStyle:r.pointStyle?r.pointStyle:e.getValueAtIndexOrDefault(o.pointStyle,n,l.pointStyle),hitRadius:r.hitRadius?r.hitRadius:e.getValueAtIndexOrDefault(o.pointHitRadius,n,l.hitRadius)}}),t._model.skip=r.skip?r.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var r=i._model,o=e.splineCurve(e.previousItem(n.data,a,!0)._model,r,e.nextItem(n.data,a,!0)._model,r.tension);r.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),r.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),r.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),r.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),i.pivot()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model;r.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),r.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(r.backgroundColor)),r.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(r.borderColor)),r.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model,o=this.chart.options.elements.point;r.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.pointRadius,a,o.radius),r.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,o.backgroundColor),r.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,o.borderColor),r.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,o.borderWidth)}})}},{}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations;for(e.chart=t,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var n=e.findIndex(this.animations,function(e){return e.chart===t});n!==-1&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var i=Date.now();t.dropFrames+=(i-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var n,i,a=this.animations,r=0;r<a.length;)n=a[r],i=n.chart,n.currentStep=(n.currentStep||0)+t,n.currentStep=Math.min(n.currentStep,n.numSteps),e.callback(n.render,[i,n],i),e.callback(n.onAnimationProgress,[n],i),n.currentStep>=n.numSteps?(e.callback(n.onAnimationComplete,[n],i),i.animating=!1,a.splice(r,1)):++r}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{}],22:[function(t,e,n){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,n,i,a,r){var o,s,l,u,d,c;if("object"==typeof n&&(o=n.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return void e.drawImage(n,a-n.width/2,r-n.height/2,n.width,n.height);if(!(isNaN(i)||i<=0)){switch(n){default:e.beginPath(),e.arc(a,r,i,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),s=3*i/Math.sqrt(3),d=s*Math.sqrt(3)/2,e.moveTo(a-s/2,r+d/3),e.lineTo(a+s/2,r+d/3),e.lineTo(a,r-2*d/3),e.closePath(),e.fill();break;case"rect":c=1/Math.SQRT2*i,e.beginPath(),e.fillRect(a-c,r-c,2*c,2*c),e.strokeRect(a-c,r-c,2*c,2*c);break;case"rectRounded":var h=i/Math.SQRT2,f=a-h,g=r-h,p=Math.SQRT2*i;t.helpers.drawRoundedRectangle(e,f,g,p,p,i/2),e.fill();break;case"rectRot":c=1/Math.SQRT2*i,e.beginPath(),e.moveTo(a-c,r),e.lineTo(a,r+c),e.lineTo(a+c,r),e.lineTo(a,r-c),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(a,r+i),e.lineTo(a,r-i),e.moveTo(a-i,r),e.lineTo(a+i,r),e.closePath();break;case"crossRot":e.beginPath(),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(a,r+i),e.lineTo(a,r-i),e.moveTo(a-i,r),e.lineTo(a+i,r),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(a-i,r),e.lineTo(a+i,r),e.closePath();break;case"dash":e.beginPath(),e.moveTo(a,r),e.lineTo(a+i,r),e.closePath()}e.stroke()}},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()},e.lineTo=function(t,e,n,i){return n.steppedLine?("after"===n.steppedLine?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y)):n.tension?void t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):void t.lineTo(n.x,n.y)},t.helpers.canvas=e}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){function e(e){e=e||{};var n=e.data=e.data||{};return n.datasets=n.datasets||[],n.labels=n.labels||[],e.options=a.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}function n(t){var e=t.options;e.scale?t.scale.options=e.scale:e.scales&&e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e){t.scales[e.id].options=e}),t.tooltip._options=e.tooltips}function i(t){return"top"===t||"bottom"===t}var a=t.helpers,r=t.plugins,o=t.platform;t.types={},t.instances={},t.controllers={},a.extend(t.prototype,{construct:function(n,i){var r=this;i=e(i);var s=o.acquireContext(n,i),l=s&&s.canvas,u=l&&l.height,d=l&&l.width;return r.id=a.uid(),r.ctx=s,r.canvas=l,r.config=i,r.width=d,r.height=u,r.aspectRatio=u?d/u:null,r.options=i.options,r._bufferedRender=!1,r.chart=r,r.controller=r,t.instances[r.id]=r,Object.defineProperty(r,"data",{get:function(){return r.config.data},set:function(t){r.config.data=t}}),s&&l?(r.initialize(),void r.update()):void console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return r.notify(t,"beforeInit"),a.retinaScale(t),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildScales(),t.initToolTip(),r.notify(t,"afterInit"),t},clear:function(){return a.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,o=n.maintainAspectRatio&&e.aspectRatio||null,s=Math.floor(a.getMaximumWidth(i)),l=Math.floor(o?s/o:a.getMaximumHeight(i));if((e.width!==s||e.height!==l)&&(i.width=e.width=s,i.height=e.height=l,i.style.width=s+"px",i.style.height=l+"px",a.retinaScale(e),!t)){var u={width:s,height:l};r.notify(e,"resize",[u]),e.options.onResize&&e.options.onResize(e,u),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;a.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),a.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var e=this,n=e.options,r=e.scales={},o=[];n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(o,function(n){var o=n.options,s=a.getValueOrDefault(o.type,n.dtype),l=t.scaleService.getScaleConstructor(s);if(l){i(o.position)!==i(n.dposition)&&(o.position=n.dposition);var u=new l({id:o.id,options:o,ctx:e.ctx,chart:e});r[u.id]=u,n.isDefault&&(e.scale=u)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],i=[];if(a.each(e.data.datasets,function(a,r){var o=e.getDatasetMeta(r);if(o.type||(o.type=a.type||e.config.type),n.push(o.type),o.controller)o.controller.updateIndex(r);else{var s=t.controllers[o.type];if(void 0===s)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new s(e,r),i.push(o.controller)}},e),n.length>1)for(var r=1;r<n.length;r++)if(n[r]!==n[r-1]){e.isCombo=!0;break}return i},resetElements:function(){var t=this;a.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,e){var i=this;if(n(i),r.notify(i,"beforeUpdate")!==!1){i.tooltip._data=i.data;var o=i.buildOrUpdateControllers();a.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()},i),i.updateLayout(),a.each(o,function(t){t.reset()}),i.updateDatasets(),r.notify(i,"afterUpdate"),i._bufferedRender?i._bufferedRequest={lazy:e,duration:t}:i.render(t,e)}},updateLayout:function(){var e=this;r.notify(e,"beforeLayout")!==!1&&(t.layoutService.update(this,this.width,this.height),r.notify(e,"afterScaleUpdate"),r.notify(e,"afterLayout"))},updateDatasets:function(){var t=this;if(r.notify(t,"beforeDatasetsUpdate")!==!1){for(var e=0,n=t.data.datasets.length;e<n;++e)t.updateDataset(e);r.notify(t,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this,n=e.getDatasetMeta(t),i={meta:n,index:t};r.notify(e,"beforeDatasetUpdate",[i])!==!1&&(n.controller.update(),r.notify(e,"afterDatasetUpdate",[i]))},render:function(e,n){var i=this;if(r.notify(i,"beforeRender")!==!1){var o=i.options.animation,s=function(t){r.notify(i,"afterRender"),a.callback(o&&o.onComplete,[t],i)};if(o&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==o.duration)){var l=new t.Animation({numSteps:(e||o.duration)/16.66,easing:o.easing,render:function(t,e){var n=a.easingEffects[e.easing],i=e.currentStep,r=i/e.numSteps;t.draw(n(r),r,i)},onAnimationProgress:o.onProgress,onAnimationComplete:s});t.animationService.addAnimation(i,l,e,n)}else i.draw(),s(new t.Animation({numSteps:0,chart:i}));return i}},draw:function(t){var e=this;e.clear(),void 0!==t&&null!==t||(t=1),e.transition(t),r.notify(e,"beforeDraw",[t])!==!1&&(a.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e.tooltip.draw(),r.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=this,n=0,i=(e.data.datasets||[]).length;n<i;++n)e.isDatasetVisible(n)&&e.getDatasetMeta(n).controller.transition(t);e.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(r.notify(e,"beforeDatasetsDraw",[t])!==!1){for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);r.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this,i=n.getDatasetMeta(t),a={meta:i,index:t,easingValue:e};r.notify(n,"beforeDatasetDraw",[a])!==!1&&(i.controller.draw(e),r.notify(n,"afterDatasetDraw",[a]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,n,i){var a=t.Interaction.modes[n];return"function"==typeof a?a(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,n,i,s=this,l=s.canvas;for(s.stop(),n=0,i=s.data.datasets.length;n<i;++n)e=s.getDatasetMeta(n),e.controller&&(e.controller.destroy(),e.controller=null);l&&(s.unbindEvents(),a.clear(s),o.releaseContext(s.ctx),s.canvas=null,s.ctx=null),r.notify(s,"destroy"),delete t.instances[s.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};a.each(t.options.events,function(i){o.addEventListener(t,i,n),e[i]=n}),t.options.responsive&&(n=function(){t.resize()},o.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,a.each(e,function(e,n){o.removeEventListener(t,n,e)}))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;a<r;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[o](i)},eventHandler:function(t){var e=this,n=e.tooltip;if(r.notify(e,"beforeEvent",[t])!==!1){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);i|=n&&n.handleEvent(t),r.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a.duration,a.lazy):i&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e=this,n=e.options||{},i=n.hover,r=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,i.mode,i),i.onHover&&i.onHover.call(e,t.native,e.active),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,i.mode,!1),e.active.length&&i.mode&&e.updateHoverStyle(e.active,i.mode,!0),r=!a.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,r}}),t.Controller=t}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void a.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),r=a.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),r}})}))}function n(t,e){var n=t._chartjs;if(n){var i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),i.length>0||(a.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,a=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],r=i.data;for(t=0,e=a.length;t<e;++t)r[t]=r[t]||n.createMetaData(t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),a=i.data||(i.data=[]);t._data!==a&&(t._data&&n(t._data,t),e(a,t),t._data=a),t.resyncElements()},update:i.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=i.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=r.backgroundColor?r.backgroundColor:o(n.backgroundColor,a,e.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(n.borderColor,a,e.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(n.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=i.getValueAtIndexOrDefault,o=i.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(e.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(e.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(e.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,i=e.data.length,a=n.length;a<i?e.data.splice(a,i-a):a>i&&t.insertElements(i,a-i)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],25:[function(t,e,n){"use strict";var i=t(2);e.exports=function(t){function e(t,e,n,a){var r,o,s,l,u,d,c,h,f,g=Object.keys(n);for(r=0,o=g.length;r<o;++r)if(s=g[r],d=n[s],e.hasOwnProperty(s)||(e[s]=d),l=e[s],l!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),u=t[s],c=typeof d,c===typeof u)if("string"===c){if(h=i(u),h.valid&&(f=i(d),f.valid)){e[s]=f.mix(h,a).rgbString();continue}}else if("number"===c&&isFinite(u)&&isFinite(d)){e[s]=u+(d-u)*a;continue}e[s]=d}}var n=t.helpers;t.elements={},t.Element=function(t){n.extend(this,t),this.initialize.apply(this,arguments)},n.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=n.clone(t._model)),t._start={},t},transition:function(t){var n=this,i=n._model,a=n._start,r=n._view;return i&&1!==t?(r||(r=n._view={}),a||(a=n._start={}),e(a,r,i,t),n):(n._view=i,n._start=null,n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return n.isNumber(this._model.x)&&n.isNumber(this._model.y)}}),t.Element.extend=n.inherits}},{2:2}],26:[function(t,e,n){"use strict";var i=t(2);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var r=document.defaultView,o=t.parentNode,s=r.getComputedStyle(t)[i],l=r.getComputedStyle(o)[i],u=n(s),d=n(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,o,a):c):"none"}var r=t.helpers={};r.each=function(t,e,n,i){var a,o;if(r.isArray(t))if(o=t.length,i)for(a=o-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<o;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(o=s.length,a=0;a<o;a++)e.call(n,t[s[a]],s[a])}},r.clone=function(t){var e={};return r.each(t,function(t,n){r.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=r.clone(t):e[n]=t}),e},r.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;n<i;n++)r.each(arguments[n],e);return t},r.configMerge=function(e){var n=r.clone(e);return r.each(Array.prototype.slice.call(arguments,1),function(e){r.each(e,function(e,i){var a=n.hasOwnProperty(i),o=a?n[i]:{};"scales"===i?n[i]=r.scaleMerge(o,e):"scale"===i?n[i]=r.configMerge(o,t.scaleService.getScaleDefaults(e.type),e):!a||"object"!=typeof o||r.isArray(o)||null===o||"object"!=typeof e||r.isArray(e)?n[i]=e:n[i]=r.configMerge(o,e)})}),n},r.scaleMerge=function(e,n){var i=r.clone(e);return r.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?r.each(e,function(e,a){var o=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(o);a>=i[n].length||!i[n][a].type?i[n].push(r.configMerge(s,e)):e.type&&e.type!==i[n][a].type?i[n][a]=r.configMerge(i[n][a],s,e):i[n][a]=r.configMerge(i[n][a],e)}):(i[n]=[],r.each(e,function(e){var a=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=r.configMerge(i[n],e):i[n]=e}),i},r.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:r.isArray(t)?e<t.length?t[e]:n:t},r.getValueOrDefault=function(t,e){return void 0===t?e:t},r.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;n<i;++n)if(t[n]===e)return n;return-1},r.where=function(t,e){if(r.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return r.each(t,function(t){e(t)&&n.push(t)}),n},r.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},r.findNextWhere=function(t,e,n){void 0!==n&&null!==n||(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},r.findPreviousWhere=function(t,e,n){void 0!==n&&null!==n||(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},r.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=r.inherits,t&&r.extend(n.prototype,t),n.__super__=e.prototype,n},r.noop=function(){},r.uid=function(){var t=0;return function(){return t++}}(),r.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r.almostEquals=function(t,e,n){return Math.abs(t-e)<n},r.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},r.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},r.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},r.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},r.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},r.toRadians=function(t){return t*(Math.PI/180)},r.toDegrees=function(t){return t*(180/Math.PI)},r.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},r.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},r.aliasPixel=function(t){return t%2===0?0:.5},r.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:r.x-c*(o.x-a.x),y:r.y-c*(o.y-a.y)},next:{x:r.x+h*(o.x-a.x),y:r.y+h*(o.y-a.y)}}},r.EPSILON=Number.EPSILON||1e-14,r.splineCurveMonotone=function(t){var e,n,i,a,o=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=o.length;for(e=0;e<s;++e)if(i=o[e],!i.model.skip){if(n=e>0?o[e-1]:null,a=e<s-1?o[e+1]:null,a&&!a.model.skip){var l=a.model.x-i.model.x;i.deltaK=0!==l?(a.model.y-i.model.y)/l:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}var u,d,c,h;for(e=0;e<s-1;++e)i=o[e],a=o[e+1],i.model.skip||a.model.skip||(r.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(u=i.mK/i.deltaK,d=a.mK/i.deltaK,h=Math.pow(u,2)+Math.pow(d,2),h<=9||(c=3/Math.sqrt(h),i.mK=u*c*i.deltaK,a.mK=d*c*i.deltaK)));var f;for(e=0;e<s;++e)i=o[e],i.model.skip||(n=e>0?o[e-1]:null,a=e<s-1?o[e+1]:null,n&&!n.model.skip&&(f=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-f,i.model.controlPointPreviousY=i.model.y-f*i.mK),a&&!a.model.skip&&(f=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+f,i.model.controlPointNextY=i.model.y+f*i.mK))},r.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},r.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},r.niceNum=function(t,e){var n,i=Math.floor(r.log10(t)),a=t/Math.pow(10,i);return n=e?a<1.5?1:a<3?2:a<7?5:10:a<=1?1:a<=2?2:a<=5?5:10,n*Math.pow(10,i)};var o=r.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;
	return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};r.requestAnimFrame=function(){return"undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),r.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,i=l[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(r.getStyle(o,"padding-left")),d=parseFloat(r.getStyle(o,"padding-top")),c=parseFloat(r.getStyle(o,"padding-right")),h=parseFloat(r.getStyle(o,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return n=Math.round((n-s.left-u)/f*o.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-d)/g*o.height/e.currentDevicePixelRatio),{x:n,y:i}},r.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},r.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=r.noop},r.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},r.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},r.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-left"),10),i=parseInt(r.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,o=r.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},r.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-top"),10),i=parseInt(r.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,o=r.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},r.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},r.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var n=t.canvas,i=t.height,a=t.width;n.height=i*e,n.width=a*e,t.ctx.scale(e,e),n.style.height=i+"px",n.style.width=a+"px"}},r.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},r.fontString=function(t,e,n){return e+" "+t+"px "+n},r.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},o=i.garbageCollect=[],i.font=e),t.font=e;var s=0;r.each(n,function(e){void 0!==e&&null!==e&&r.isArray(e)!==!0?s=r.measureText(t,a,o,s,e):r.isArray(e)&&r.each(e,function(e){void 0===e||null===e||r.isArray(e)||(s=r.measureText(t,a,o,s,e))})});var l=o.length/2;if(l>n.length){for(var u=0;u<l;u++)delete a[o[u]];o.splice(0,l)}return s},r.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},r.numberOfLabelLines=function(t){var e=1;return r.each(t,function(t){r.isArray(t)&&t.length>e&&(e=t.length)}),e},r.drawRoundedRectangle=function(t,e,n,i,a,r){t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+a-r),t.quadraticCurveTo(e+i,n+a,e+i-r,n+a),t.lineTo(e+r,n+a),t.quadraticCurveTo(e,n+a,e,n+a-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath()},r.color=i?function(e){return e instanceof CanvasGradient&&(e=t.defaults.global.defaultColor),i(e)}:function(t){return console.error("Color.js not found!"),t},r.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r.arrayEquals=function(t,e){var n,i,a,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],o=e[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1}else if(a!==o)return!1;return!0},r.callback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},r.getHoverColor=function(t){return t instanceof CanvasPattern?t:r.color(t).saturate(.5).darken(.1).rgbString()},r.callCallback=r.callback}},{2:2}],27:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.native?{x:t.x,y:t.y}:o.getRelativePosition(t,e)}function n(t,e){var n,i,a,r,o,s=t.data.datasets;for(i=0,r=s.length;i<r;++i)if(t.isDatasetVisible(i))for(n=t.getDatasetMeta(i),a=0,o=n.data.length;a<o;++a){var l=n.data[a];l._view.skip||e(l)}}function i(t,e){var i=[];return n(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function a(t,e,i,a){var r=Number.POSITIVE_INFINITY,s=[];return a||(a=o.distanceBetweenPoints),n(t,function(t){if(!i||t.inRange(e.x,e.y)){var n=t.getCenterPoint(),o=a(e,n);o<r?(s=[t],r=o):o===r&&s.push(t)}}),s}function r(t,n,r){var o=e(n,t),s=function(t,e){return Math.abs(t.x-e.x)},l=r.intersect?i(t,o):a(t,o,!1,s),u=[];return l.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var i=t.getDatasetMeta(n),a=i.data[l[0]._index];a&&!a._view.skip&&u.push(a)}}),u):[]}var o=t.helpers;t.Interaction={modes:{single:function(t,i){var a=e(i,t),r=[];return n(t,function(t){if(t.inRange(a.x,a.y))return r.push(t),r}),r.slice(0,1)},label:r,index:r,dataset:function(t,n,r){var o=e(n,t),s=r.intersect?i(t,o):a(t,o,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return r(t,e,!0)},point:function(t,n){var a=e(n,t);return i(t,a)},nearest:function(t,n,i){var r=e(n,t),o=a(t,r,i.intersect);return o.length>1&&o.sort(function(t,e){var n=t.getArea(),i=e.getArea(),a=n-i;return 0===a&&(a=t._datasetIndex-e._datasetIndex),a}),o.slice(0,1)},x:function(t,i,a){var r=e(i,t),o=[],s=!1;return n(t,function(t){t.inXRange(r.x)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o},y:function(t,i,a){var r=e(i,t),o=[],s=!1;return n(t,function(t){t.inYRange(r.y)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o}}}}},{}],28:[function(t,e,n){"use strict";e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return i.where(t,function(t){return t.position===e})}function n(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i._tmpIndex_-a._tmpIndex_:i.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}var i=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,a,r){function o(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?_:C,D),P-=e.height):(e=t.update(S,M),C-=e.width),T.push({horizontal:n,minSize:e,box:t})}function s(t){var e=i.findNextWhere(T,function(e){return e.box===t});if(e)if(t.isHorizontal()){var n={left:Math.max(R,I),right:Math.max(L,A),top:0,bottom:0};t.update(t.fullWidth?_:C,k/2,n)}else t.update(e.minSize.width,P)}function l(t){var e=i.findNextWhere(T,function(e){return e.box===t}),n={left:0,right:0,top:V,bottom:W};e&&t.update(e.minSize.width,P,n)}function u(t){t.isHorizontal()?(t.left=t.fullWidth?h:R,t.right=t.fullWidth?a-f:R+C,t.top=H,t.bottom=H+t.height,H=t.bottom):(t.left=E,t.right=E+t.width,t.top=V,t.bottom=V+P,E=t.right)}if(t){var d=t.options.layout,c=d?d.padding:null,h=0,f=0,g=0,p=0;isNaN(c)?(h=c.left||0,f=c.right||0,g=c.top||0,p=c.bottom||0):(h=c,f=c,g=c,p=c);var m=e(t.boxes,"left"),v=e(t.boxes,"right"),y=e(t.boxes,"top"),b=e(t.boxes,"bottom"),x=e(t.boxes,"chartArea");n(m,!0),n(v,!1),n(y,!0),n(b,!1);var _=a-h-f,k=r-g-p,w=_/2,M=k/2,S=(a-w)/(m.length+v.length),D=(r-M)/(y.length+b.length),C=_,P=k,T=[];i.each(m.concat(v,y,b),o);var I=0,A=0,F=0,O=0;i.each(y.concat(b),function(t){if(t.getPadding){var e=t.getPadding();I=Math.max(I,e.left),A=Math.max(A,e.right)}}),i.each(m.concat(v),function(t){if(t.getPadding){var e=t.getPadding();F=Math.max(F,e.top),O=Math.max(O,e.bottom)}});var R=h,L=f,V=g,W=p;i.each(m.concat(v),s),i.each(m,function(t){R+=t.width}),i.each(v,function(t){L+=t.width}),i.each(y.concat(b),s),i.each(y,function(t){V+=t.height}),i.each(b,function(t){W+=t.height}),i.each(m.concat(v),l),R=h,L=f,V=g,W=p,i.each(m,function(t){R+=t.width}),i.each(v,function(t){L+=t.width}),i.each(y,function(t){V+=t.height}),i.each(b,function(t){W+=t.height});var Y=Math.max(I-R,0);R+=Y,L+=Math.max(A-L,0);var z=Math.max(F-V,0);V+=z,W+=Math.max(O-W,0);var N=r-V-W,B=a-R-L;B===C&&N===P||(i.each(m,function(t){t.height=N}),i.each(v,function(t){t.height=N}),i.each(y,function(t){t.fullWidth||(t.width=B)}),i.each(b,function(t){t.fullWidth||(t.width=B)}),P=N,C=B);var E=h+Y,H=g+z;i.each(m.concat(y),u),E+=C,H+=P,i.each(v,u),i.each(b,u),t.chartArea={left:R,top:V,right:R+C,bottom:V+P},i.each(x,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(C,P)})}}}}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){e.indexOf(t)===-1&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if(a=l[i],r=a.plugin,s=r[e],"function"==typeof s&&(o=[t].concat(n||[]),o.push(a.options),s.apply(r,o)===!1))return!1;return!0},descriptors:function(n){var i=n._plugins||(n._plugins={});if(i.id===this._cacheId)return i.descriptors;var a=[],r=[],o=n&&n.config||{},s=t.defaults.global.plugins,l=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(t){var n=a.indexOf(t);if(n===-1){var i=t.id,o=l[i];o!==!1&&(o===!0&&(o=e.clone(s[i])),a.push(t),r.push({plugin:t,options:o||{}}))}}),i.descriptors=r,i.id=this._cacheId,r}},t.pluginService=t.plugins,t.PluginBase=t.Element.extend({})}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e,n){return i.isArray(e)?i.longestText(t,n,e):t.measureText(e).width}function n(e){var n=i.getValueOrDefault,a=t.defaults.global,r=n(e.fontSize,a.defaultFontSize),o=n(e.fontStyle,a.defaultFontStyle),s=n(e.fontFamily,a.defaultFontFamily);return{size:r,style:o,family:s,font:i.fontString(r,o,s)}}var i=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},beforeUpdate:function(){i.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=e,a.margins=i.extend({left:0,right:0,top:0,bottom:0},n),a.longestTextCache=a.longestTextCache||{},a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){i.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){i.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){i.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){i.callback(this.options.beforeDataLimits,[this])},determineDataLimits:i.noop,afterDataLimits:function(){i.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){i.callback(this.options.beforeBuildTicks,[this])},buildTicks:i.noop,afterBuildTicks:function(){i.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){i.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){i.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){i.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,a=t.options.ticks,r=n(a);e.font=r.font;var o=a.minRotation||0;if(t.options.display&&t.isHorizontal())for(var s,l,u=i.longestText(e,r.font,t.ticks,t.longestTextCache),d=u,c=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>c&&o<a.maxRotation;){var h=i.toRadians(o);if(s=Math.cos(h),l=Math.sin(h),l*u>t.maxHeight){o--;break}o++,d=s*u}t.labelRotation=o},afterCalculateTickRotation:function(){i.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){i.callback(this.options.beforeFit,[this])},fit:function(){var t=this,a=t.minSize={width:0,height:0},r=t.options,o=r.ticks,s=r.scaleLabel,l=r.gridLines,u=r.display,d=t.isHorizontal(),c=n(o),h=1.5*n(s).size,f=r.gridLines.tickMarkLength;if(d?a.width=t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:a.width=u&&l.drawTicks?f:0,d?a.height=u&&l.drawTicks?f:0:a.height=t.maxHeight,s.display&&u&&(d?a.height+=h:a.width+=h),o.display&&u){var g=i.longestText(t.ctx,c.font,t.ticks,t.longestTextCache),p=i.numberOfLabelLines(t.ticks),m=.5*c.size;if(d){t.longestLabelWidth=g;var v=i.toRadians(t.labelRotation),y=Math.cos(v),b=Math.sin(v),x=b*g+c.size*p+m*p;a.height=Math.min(t.maxHeight,a.height+x),t.ctx.font=c.font;var _=t.ticks[0],k=e(t.ctx,_,c.font),w=t.ticks[t.ticks.length-1],M=e(t.ctx,w,c.font);0!==t.labelRotation?(t.paddingLeft="bottom"===r.position?y*k+3:y*m+3,t.paddingRight="bottom"===r.position?y*m+3:y*M+3):(t.paddingLeft=k/2+3,t.paddingRight=M/2+3)}else o.mirror?g=0:g+=t.options.ticks.padding,a.width=Math.min(t.maxWidth,a.width+g),t.paddingTop=c.size/2,t.paddingBottom=c.size/2}t.handleMargins(),t.width=a.width,t.height=a.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){i.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:i.noop,getPixelForValue:i.noop,getValueForPixel:i.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),r=a*t+n.paddingLeft;e&&(r+=a/2);var o=n.left+Math.round(r);return o+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(s/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,n=t.max;return t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0},draw:function(e){var a=this,r=a.options;if(r.display){var o,s,l=a.ctx,u=t.defaults.global,d=r.ticks,c=r.gridLines,h=r.scaleLabel,f=0!==a.labelRotation,g=d.autoSkip,p=a.isHorizontal();d.maxTicksLimit&&(s=d.maxTicksLimit);var m=i.getValueOrDefault(d.fontColor,u.defaultFontColor),v=n(d),y=c.drawTicks?c.tickMarkLength:0,b=i.getValueOrDefault(h.fontColor,u.defaultFontColor),x=n(h),_=i.toRadians(a.labelRotation),k=Math.cos(_),w=a.longestLabelWidth*k;l.fillStyle=m;var M=[];if(p){if(o=!1,(w+d.autoSkipPadding)*a.ticks.length>a.width-(a.paddingLeft+a.paddingRight)&&(o=1+Math.floor((w+d.autoSkipPadding)*a.ticks.length/(a.width-(a.paddingLeft+a.paddingRight)))),s&&a.ticks.length>s)for(;!o||a.ticks.length/(o||1)>s;)o||(o=1),o+=1;g||(o=!1)}var S="right"===r.position?a.left:a.right-y,D="right"===r.position?a.left+y:a.right,C="bottom"===r.position?a.top:a.bottom-y,P="bottom"===r.position?a.top+y:a.bottom;if(i.each(a.ticks,function(t,n){if(void 0!==t&&null!==t){var s=a.ticks.length===n+1,l=o>1&&n%o>0||n%o===0&&n+o>=a.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var h,g,m,v;n===("undefined"!=typeof a.zeroLineIndex?a.zeroLineIndex:0)?(h=c.zeroLineWidth,g=c.zeroLineColor,m=c.zeroLineBorderDash,v=c.zeroLineBorderDashOffset):(h=i.getValueAtIndexOrDefault(c.lineWidth,n),g=i.getValueAtIndexOrDefault(c.color,n),m=i.getValueOrDefault(c.borderDash,u.borderDash),v=i.getValueOrDefault(c.borderDashOffset,u.borderDashOffset));var b,x,k,w,T,I,A,F,O,R,L="middle",V="middle";if(p){"bottom"===r.position?(V=f?"middle":"top",L=f?"right":"center",R=a.top+y):(V=f?"middle":"bottom",L=f?"left":"center",R=a.bottom-y);var W=a.getPixelForTick(n)+i.aliasPixel(h);O=a.getPixelForTick(n,c.offsetGridLines)+d.labelOffset,b=k=T=A=W,x=C,w=P,I=e.top,F=e.bottom}else{var Y,z="left"===r.position,N=d.padding;d.mirror?(L=z?"left":"right",Y=N):(L=z?"right":"left",Y=y+N),O=z?a.right-Y:a.left+Y;var B=a.getPixelForTick(n);B+=i.aliasPixel(h),R=a.getPixelForTick(n,c.offsetGridLines),b=S,k=D,T=e.left,A=e.right,x=w=I=F=B}M.push({tx1:b,ty1:x,tx2:k,ty2:w,x1:T,y1:I,x2:A,y2:F,labelX:O,labelY:R,glWidth:h,glColor:g,glBorderDash:m,glBorderDashOffset:v,rotation:-1*_,label:t,textBaseline:V,textAlign:L})}}}),i.each(M,function(t){if(c.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),c.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),c.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=v.font,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var e=t.label;if(i.isArray(e))for(var n=0,a=0;n<e.length;++n)l.fillText(""+e[n],0,a),a+=1.5*v.size;else l.fillText(e,0,0);l.restore()}}),h.display){var T,I,A=0;if(p)T=a.left+(a.right-a.left)/2,I="bottom"===r.position?a.bottom-x.size/2:a.top+x.size/2;else{var F="left"===r.position;T=F?a.left+x.size/2:a.right-x.size/2,I=a.top+(a.bottom-a.top)/2,A=F?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(T,I),l.rotate(A),l.textAlign="center",l.textBaseline="middle",l.fillStyle=b,l.font=x.font,l.fillText(h.labelString,0,0),l.restore()}if(c.drawBorder){l.lineWidth=i.getValueAtIndexOrDefault(c.lineWidth,0),l.strokeStyle=i.getValueAtIndexOrDefault(c.color,0);var O=a.left,R=a.right,L=a.top,V=a.bottom,W=i.aliasPixel(l.lineWidth);p?(L=V="top"===r.position?a.bottom:a.top,L+=W,V+=W):(O=R="left"===r.position?a.right:a.left,O+=W,R+=W),l.beginPath(),l.moveTo(O,L),l.lineTo(R,V),l.stroke()}}}})}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,t.layoutService.addBox(n,e)})}}}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,n){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var r=e.niceNum(n.max-n.min,!1);i=e.niceNum(r/(t.maxTicks-1),!0)}var o=Math.floor(n.min/i)*i,s=Math.ceil(n.max/i)*i;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(o=t.min,s=t.max);var l=(s-o)/i;l=e.almostEquals(l,Math.round(l),i/1e3)?Math.round(l):Math.ceil(l),a.push(void 0!==t.min?t.min:o);for(var u=1;u<l;++u)a.push(o+u*i);return a.push(void 0!==t.max?t.max:s),a},logarithmic:function(t,n){var i,a,r=[],o=e.getValueOrDefault,s=o(t.min,Math.pow(10,Math.floor(e.log10(n.min)))),l=Math.floor(e.log10(n.max)),u=Math.ceil(n.max/Math.pow(10,l));0===s?(i=Math.floor(e.log10(n.minNotZero)),a=Math.floor(n.minNotZero/Math.pow(10,i)),r.push(s),s=a*Math.pow(10,i)):(i=Math.floor(e.log10(s)),a=Math.floor(s/Math.pow(10,i)));do r.push(s),++a,10===a&&(a=1,++i),s=a*Math.pow(10,i);while(i<l||i===l&&a<u);var d=o(t.max,s);return r.push(d),r}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=e.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}}}},{}],34:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=l.color(t);return n.alpha(e*n.alpha()).rgbaString()}function n(t,e){return e&&(l.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a,x:t._model.x,y:t._model.y}}function a(e){var n=t.defaults.global,i=l.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,n.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,n.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,n.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,n.defaultFontStyle),titleFontSize:i(e.titleFontSize,n.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,n.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,n.defaultFontStyle),footerFontSize:i(e.footerFontSize,n.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors,borderColor:e.borderColor,borderWidth:e.borderWidth}}function r(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=s*d,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*c,i+=o?(o-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,n.measureText(t).width+f)};return n.font=l.fontString(d,e._titleFontStyle,e._titleFontFamily),l.each(e.title,g),n.font=l.fontString(c,e._bodyFontStyle,e._bodyFontFamily),l.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,l.each(r,function(t){l.each(t.before,g),l.each(t.lines,g),l.each(t.after,g)}),f=0,n.font=l.fontString(h,e._footerFontStyle,e._footerFontFamily),l.each(e.footer,g),a+=2*e.xPadding,{width:a,height:i}}function o(t,e){var n=t._model,i=t._chart,a=t._chart.chartArea,r="center",o="center";n.y<e.height?o="top":n.y>i.height-e.height&&(o="bottom");var s,l,u,d,c,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2;"center"===o?(s=function(t){return t<=h},l=function(t){return t>h}):(s=function(t){return t<=e.width/2},l=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return t<=f?"top":"bottom"},s(n.x)?(r="left",u(n.x)&&(r="center",o=c(n.y))):l(n.x)&&(r="right",d(n.x)&&(r="center",o=c(n.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:r,yAlign:g.yAlign?g.yAlign:o}}function s(t,e,n){var i=t.x,a=t.y,r=t.caretSize,o=t.caretPadding,s=t.cornerRadius,l=n.xAlign,u=n.yAlign,d=r+o,c=s+o;return"right"===l?i-=e.width:"center"===l&&(i-=e.width/2),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===l?i+=d:"right"===l&&(i-=d):"left"===l?i-=c:"right"===l&&(i+=c),{x:i,y:a}}var l=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:l.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:l.noop,beforeBody:l.noop,beforeLabel:l.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:l.noop,afterBody:l.noop,beforeFooter:l.noop,footer:l.noop,afterFooter:l.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=a(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,a=i.beforeTitle.apply(t,arguments),r=i.title.apply(t,arguments),o=i.afterTitle.apply(t,arguments),s=[];return s=n(s,a),s=n(s,r),s=n(s,o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,a=i._options.callbacks,r=[];return l.each(t,function(t){var o={before:[],lines:[],after:[]};n(o.before,a.beforeLabel.call(i,t,e)),n(o.lines,a.label.call(i,t,e)),n(o.after,a.afterLabel.call(i,t,e)),r.push(o)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),a=e.footer.apply(t,arguments),r=e.afterFooter.apply(t,arguments),o=[];return o=n(o,i),o=n(o,a),o=n(o,r)},update:function(e){var n,u,d=this,c=d._options,h=d._model,f=d._model=a(c),g=d._active,p=d._data,m={xAlign:h.xAlign,yAlign:h.yAlign},v={x:h.x,y:h.y},y={width:h.width,height:h.height},b={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var x=[];b=t.Tooltip.positioners[c.position](g,d._eventPosition);var _=[];for(n=0,u=g.length;n<u;++n)_.push(i(g[n]));c.filter&&(_=_.filter(function(t){return c.filter(t,p)})),c.itemSort&&(_=_.sort(function(t,e){return c.itemSort(t,e,p)})),l.each(_,function(t){x.push(c.callbacks.labelColor.call(d,t,d._chart))}),f.title=d.getTitle(_,p),f.beforeBody=d.getBeforeBody(_,p),f.body=d.getBody(_,p),f.afterBody=d.getAfterBody(_,p),f.footer=d.getFooter(_,p),f.x=Math.round(b.x),f.y=Math.round(b.y),f.caretPadding=c.caretPadding,f.labelColors=x,f.dataPoints=_,y=r(this,f),m=o(this,y),v=s(f,y,m)}else f.opacity=0;return f.xAlign=m.xAlign,f.yAlign=m.yAlign,f.x=v.x,f.y=v.y,f.width=y.width,f.height=y.height,f.caretX=b.x,f.caretY=b.y,d._model=f,e&&c.custom&&c.custom.call(d,f),d},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,c=n.xAlign,h=n.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===h)s=g+m/2,"left"===c?(i=f,a=i-u,r=i,o=s+u,l=s-u):(i=f+p,a=i+u,r=i,o=s-u,l=s+u);else if("left"===c?(a=f+d+u,i=a-u,r=a+u):"right"===c?(a=f+p-d-u,i=a-u,r=a+u):(a=f+p/2,i=a-u,r=a+u),"top"===h)o=g,s=o-u,l=o;else{o=g+m,s=o+u,l=o;var v=r;r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,n,i,a){var r=n.title;if(r.length){i.textAlign=n._titleAlign,i.textBaseline="top";var o=n.titleFontSize,s=n.titleSpacing;i.fillStyle=e(n.titleFontColor,a),i.font=l.fontString(o,n._titleFontStyle,n._titleFontFamily);var u,d;for(u=0,d=r.length;u<d;++u)i.fillText(r[u],t.x,t.y),t.y+=o+s,u+1===r.length&&(t.y+=n.titleMarginBottom-s)}},drawBody:function(t,n,i,a){var r=n.bodyFontSize,o=n.bodySpacing,s=n.body;i.textAlign=n._bodyAlign,i.textBaseline="top";var u=e(n.bodyFontColor,a);i.fillStyle=u,i.font=l.fontString(r,n._bodyFontStyle,n._bodyFontFamily);var d=0,c=function(e){i.fillText(e,t.x+d,t.y),t.y+=r+o};l.each(n.beforeBody,c);var h=n.displayColors;d=h?r+2:0,l.each(s,function(o,s){l.each(o.before,c),l.each(o.lines,function(o){h&&(i.fillStyle=e(n.legendColorBackground,a),i.fillRect(t.x,t.y,r,r),i.strokeStyle=e(n.labelColors[s].borderColor,a),i.strokeRect(t.x,t.y,r,r),i.fillStyle=e(n.labelColors[s].backgroundColor,a),i.fillRect(t.x+1,t.y+1,r-2,r-2),i.fillStyle=u),c(o)}),l.each(o.after,c)}),d=0,l.each(n.afterBody,c),t.y-=o},drawFooter:function(t,n,i,a){var r=n.footer;r.length&&(t.y+=n.footerMarginTop,i.textAlign=n._footerAlign,i.textBaseline="top",i.fillStyle=e(n.footerFontColor,a),i.font=l.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),l.each(r,function(e){i.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,i,a,r){i.fillStyle=e(n.backgroundColor,r),i.strokeStyle=e(n.borderColor,r),i.lineWidth=n.borderWidth;var o=n.xAlign,s=n.yAlign,l=t.x,u=t.y,d=a.width,c=a.height,h=n.cornerRadius;i.beginPath(),i.moveTo(l+h,u),"top"===s&&this.drawCaret(t,a),i.lineTo(l+d-h,u),i.quadraticCurveTo(l+d,u,l+d,u+h),
	"center"===s&&"right"===o&&this.drawCaret(t,a),i.lineTo(l+d,u+c-h),i.quadraticCurveTo(l+d,u+c,l+d-h,u+c),"bottom"===s&&this.drawCaret(t,a),i.lineTo(l+h,u+c),i.quadraticCurveTo(l,u+c,l,u+c-h),"center"===s&&"left"===o&&this.drawCaret(t,a),i.lineTo(l,u+h),i.quadraticCurveTo(l,u,l+h,u),i.closePath(),i.fill(),n.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(this.drawBackground(i,e,t,n,a),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,a),this.drawBody(i,e,t,a),this.drawFooter(i,e,t,a))}},handleEvent:function(t){var e=this,n=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chart.getElementsAtEventForMode(t,n.mode,n),i=!l.arrayEquals(e._active,e._lastActive),!i)return!1;if(e._lastActive=e._active,n.enabled||n.custom){e._eventPosition={x:t.x,y:t.y};var a=e._model;e.update(!0),e.pivot(),i|=a.x!==e._model.x||a.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:Math.round(i/r),y:Math.round(a/r)}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,a=t.length;i<a;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=l.distanceBetweenPoints(e,d);c<s&&(s=c,n=u)}}if(n){var h=n.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}}}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,n){var i=this._view;if(i){for(var a=e.getAngleFromPoint(i,{x:t,y:n}),r=a.angle,o=a.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;r>l;)r-=2*Math.PI;for(;r<s;)r+=2*Math.PI;var u=r>=s&&r<=l,d=o>=i.innerRadius&&o<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){var t,i,a,r,o=this,s=o._view,l=o._chart.ctx,u=s.spanGaps,d=o._children.slice(),c=n.elements.line,h=-1;for(o._loop&&d.length&&d.push(d[0]),l.save(),l.lineCap=s.borderCapStyle||c.borderCapStyle,l.setLineDash&&l.setLineDash(s.borderDash||c.borderDash),l.lineDashOffset=s.borderDashOffset||c.borderDashOffset,l.lineJoin=s.borderJoinStyle||c.borderJoinStyle,l.lineWidth=s.borderWidth||c.borderWidth,l.strokeStyle=s.borderColor||n.defaultColor,l.beginPath(),h=-1,t=0;t<d.length;++t)i=d[t],a=e.previousItem(d,t),r=i._view,0===t?r.skip||(l.moveTo(r.x,r.y),h=t):(a=h===-1?a:d[h],r.skip||(h!==t-1&&!u||h===-1?l.moveTo(r.x,r.y):e.canvas.lineTo(l,a._view,i._view),h=t));l.stroke(),l.restore()}})}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}function n(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)}var i=t.helpers,a=t.defaults.global,r=a.defaultColor;a.elements.point={radius:3,pointStyle:"circle",backgroundColor:r,borderWidth:1,borderColor:r,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:e,inXRange:e,inYRange:n,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(e){var n=this._view,o=this._model,s=this._chart.ctx,l=n.pointStyle,u=n.radius,d=n.x,c=n.y,h=t.helpers.color,f=1.01,g=0;n.skip||(s.strokeStyle=n.borderColor||r,s.lineWidth=i.getValueOrDefault(n.borderWidth,a.elements.point.borderWidth),s.fillStyle=n.backgroundColor||r,void 0!==e&&(o.x<e.left||e.right*f<o.x||o.y<e.top||e.bottom*f<o.y)&&(o.x<e.left?g=(d-o.x)/(e.left-o.x):e.right*f<o.x?g=(o.x-d)/(o.x-e.right):o.y<e.top?g=(c-o.y)/(e.top-o.y):e.bottom*f<o.y&&(g=(o.y-c)/(o.y-e.bottom)),g=Math.round(100*g)/100,s.strokeStyle=h(s.strokeStyle).alpha(g).rgbString(),s.fillStyle=h(s.fillStyle).alpha(g).rgbString()),t.canvasHelpers.drawPoint(s,l,u,d,c))}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function n(t){var n,i,a,r,o=t._view;if(e(t)){var s=o.width/2;n=o.x-s,i=o.x+s,a=Math.min(o.y,o.base),r=Math.max(o.y,o.base)}else{var l=o.height/2;n=Math.min(o.x,o.base),i=Math.max(o.x,o.base),a=o.y-l,r=o.y+l}return{left:n,top:a,right:i,bottom:r}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return v[(b+t)%4]}var e,n,i,a,r,o,s,l=this._chart.ctx,u=this._view,d=u.borderWidth;if(u.horizontal?(e=u.base,n=u.x,i=u.y-u.height/2,a=u.y+u.height/2,r=n>e?1:-1,o=1,s=u.borderSkipped||"left"):(e=u.x-u.width/2,n=u.x+u.width/2,i=u.y,a=u.base,r=1,o=a>i?1:-1,s=u.borderSkipped||"bottom"),d){var c=Math.min(Math.abs(e-n),Math.abs(i-a));d=d>c?c:d;var h=d/2,f=e+("left"!==s?h*r:0),g=n+("right"!==s?-h*r:0),p=i+("top"!==s?h*o:0),m=a+("bottom"!==s?-h*o:0);f!==g&&(i=p,a=m),p!==m&&(e=f,n=g)}l.beginPath(),l.fillStyle=u.backgroundColor,l.strokeStyle=u.borderColor,l.lineWidth=d;var v=[[e,a],[e,i],[n,i],[n,a]],y=["bottom","left","top","right"],b=y.indexOf(s,0);b===-1&&(b=0);var x=t(0);l.moveTo(x[0],x[1]);for(var _=1;_<4;_++)x=t(_),l.lineTo(x[0],x[1]);l.fill(),d&&l.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var a=n(this);i=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}return i},inLabelRange:function(t,i){var a=this;if(!a._view)return!1;var r=!1,o=n(a);return r=e(a)?t>=o.left&&t<=o.right:i>=o.top&&i<=o.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,n,i=this._view;return e(this)?(t=i.x,n=(i.y+i.base)/2):(t=(i.x+i.base)/2,n=i.y),{x:t,y:n}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=l.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}function n(t,n){var i=t.style,a=t.getAttribute("height"),r=t.getAttribute("width");if(t._chartjs={initial:{height:a,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===r||""===r){var o=e(t,"width");void 0!==o&&(t.width=o)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(n.options.aspectRatio||2);else{var s=e(t,"height");void 0!==o&&(t.height=s)}return t}function i(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function a(t,e){var n=u[t.type]||t.type,a=l.getRelativePosition(t,e);return i(n,e,a.x,a.y,t)}function r(t){var e=document.createElement("iframe");return e.className="chartjs-hidden-iframe",e.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",e.tabIndex=-1,l.addEvent(e,"load",function(){l.addEvent(e.contentWindow||e,"resize",t),t()}),e}function o(t,e,n){var a=t._chartjs={ticking:!1},o=function(){a.ticking||(a.ticking=!0,l.requestAnimFrame.call(window,function(){if(a.resizer)return a.ticking=!1,e(i("resize",n))}))};a.resizer=r(o),t.insertBefore(a.resizer,t.firstChild)}function s(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}var l=t.helpers,u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};return{acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(n(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e._chartjs){var n=e._chartjs.initial;["height","width"].forEach(function(t){var i=n[t];void 0===i||null===i?e.removeAttribute(t):e.setAttribute(t,i)}),l.each(n.style||{},function(t,n){e.style[n]=t}),e.width=e.width,delete e._chartjs}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"===e)return void o(i.parentNode,n,t);var r=n._chartjs||(n._chartjs={}),s=r.proxies||(r.proxies={}),u=s[t.id+"_"+e]=function(e){n(a(e,t))};l.addEvent(i,e,u)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"===e)return void s(i.parentNode,n);var a=n._chartjs||{},r=a.proxies||{},o=r[t.id+"_"+e];o&&l.removeEvent(i,e,o)}}}},{}],40:[function(t,e,n){"use strict";var i=t(39);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,i(t))}},{39:39}],41:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e,n){var i,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),r===!1||null===r)return!1;if(r===!0)return"origin";if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function n(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePosition?r=i.getBasePosition():i.getBasePixel&&(r=i.getBasePixel()),void 0!==r&&null!==r){if(void 0!==r.x&&void 0!==r.y)return r;if("number"==typeof r&&isFinite(r))return e=i.isHorizontal(),{x:e?r:null,y:e?null:r}}return null}function i(t,e,n){var i,a=t[e],r=a.fill,o=[e];if(!n)return r;for(;r!==!1&&o.indexOf(r)===-1;){if(!isFinite(r))return r;if(i=t[r],!i)return!1;if(i.visible)return r;o.push(r),r=i.fill}return!1}function a(t){var e=t.fill,n="dataset";return e===!1?null:(isFinite(e)||(n="boundary"),d[n](t))}function r(t){return t&&!t.skip}function o(t,e,n,i,a){var r;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)u.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)u.canvas.lineTo(t,n[r],n[r-1],!0)}}function s(t,e,n,i,a,s){var l,u,d,c,h,f,g,p=e.length,m=i.spanGaps,v=[],y=[],b=0,x=0;for(t.beginPath(),l=0,u=p+!!s;l<u;++l)d=l%p,c=e[d]._view,h=n(c,d,i),f=r(c),g=r(h),f&&g?(b=v.push(c),x=y.push(h)):b&&x&&(m?(f&&v.push(c),g&&y.push(h)):(o(t,v,y,b,x),b=x=0,v=[],y=[]));o(t,v,y,b,x),t.closePath(),t.fillStyle=a,t.fill()}t.defaults.global.plugins.filler={propagate:!0};var l=t.defaults,u=t.helpers,d={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e),r=a&&i.dataset._children||[];return r.length?function(t,e){return r[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};return{id:"filler",afterDatasetsUpdate:function(r,o){var s,l,u,d,c=(r.data.datasets||[]).length,h=o.propagate,f=[];for(l=0;l<c;++l)s=r.getDatasetMeta(l),u=s.dataset,d=null,u&&u._model&&u instanceof t.elements.Line&&(d={visible:r.isDatasetVisible(l),fill:e(u,l,c),chart:r,el:u}),s.$filler=d,f.push(d);for(l=0;l<c;++l)d=f[l],d&&(d.fill=i(f,l,h),d.boundary=n(d),d.mapper=a(d))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var i=n.el,a=i._view,r=i._children||[],o=n.mapper,u=a.backgroundColor||l.global.defaultColor;o&&u&&r.length&&s(t.ctx,r,o,a,u,i._loop)}}}}},{}],42:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function n(e,n){var i=new t.Legend({ctx:e.ctx,options:n,chart:e});a.configure(e,i,n),a.addBox(e,i),e.legend=i}var i=t.helpers,a=t.layoutService,r=i.noop;return t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return i.isArray(e.datasets)?e.datasets.map(function(e,n){return{text:e.label,fillStyle:i.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){i.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:r,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:function(){var t=this,e=t.options.labels,n=e.generateLabels.call(t,t.chart);e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:r,beforeFit:r,fit:function(){var n=this,a=n.options,r=a.labels,o=a.display,s=n.ctx,l=t.defaults.global,u=i.getValueOrDefault,d=u(r.fontSize,l.defaultFontSize),c=u(r.fontStyle,l.defaultFontStyle),h=u(r.fontFamily,l.defaultFontFamily),f=i.fontString(d,c,h),g=n.legendHitBoxes=[],p=n.minSize,m=n.isHorizontal();if(m?(p.width=n.maxWidth,p.height=o?10:0):(p.width=o?10:0,p.height=n.maxHeight),o)if(s.font=f,m){var v=n.lineWidths=[0],y=n.legendItems.length?d+r.padding:0;s.textAlign="left",s.textBaseline="top",i.each(n.legendItems,function(t,i){var a=e(r,d),o=a+d/2+s.measureText(t.text).width;v[v.length-1]+o+r.padding>=n.width&&(y+=d+r.padding,v[v.length]=n.left),g[i]={left:0,top:0,width:o,height:d},v[v.length-1]+=o+r.padding}),p.height+=y}else{var b=r.padding,x=n.columnWidths=[],_=r.padding,k=0,w=0,M=d+b;i.each(n.legendItems,function(t,n){var i=e(r,d),a=i+d/2+s.measureText(t.text).width;w+M>p.height&&(_+=k+r.padding,x.push(k),k=0,w=0),k=Math.max(k,a),w+=M,g[n]={left:0,top:0,width:a,height:d}}),_+=k,x.push(k),p.width+=_}n.width=p.width,n.height=p.height},afterFit:r,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,a=n.options,r=a.labels,o=t.defaults.global,s=o.elements.line,l=n.width,u=n.lineWidths;if(a.display){var d,c=n.ctx,h=i.getValueOrDefault,f=h(r.fontColor,o.defaultFontColor),g=h(r.fontSize,o.defaultFontSize),p=h(r.fontStyle,o.defaultFontStyle),m=h(r.fontFamily,o.defaultFontFamily),v=i.fontString(g,p,m);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var y=e(r,g),b=n.legendHitBoxes,x=function(e,n,i){if(!(isNaN(y)||y<=0)){c.save(),c.fillStyle=h(i.fillStyle,o.defaultColor),c.lineCap=h(i.lineCap,s.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,s.borderDashOffset),c.lineJoin=h(i.lineJoin,s.borderJoinStyle),c.lineWidth=h(i.lineWidth,s.borderWidth),c.strokeStyle=h(i.strokeStyle,o.defaultColor);var r=0===h(i.lineWidth,s.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,s.borderDash)),a.labels&&a.labels.usePointStyle){var l=g*Math.SQRT2/2,u=l/Math.SQRT2,d=e+u,f=n+u;t.canvasHelpers.drawPoint(c,i.pointStyle,l,d,f)}else r||c.strokeRect(e,n,y,g),c.fillRect(e,n,y,g);c.restore()}},_=function(t,e,n,i){c.fillText(n.text,y+g/2+t,e),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(y+g/2+t,e+g/2),c.lineTo(y+g/2+t+i,e+g/2),c.stroke())},k=n.isHorizontal();d=k?{x:n.left+(l-u[0])/2,y:n.top+r.padding,line:0}:{x:n.left+r.padding,y:n.top+r.padding,line:0};var w=g+r.padding;i.each(n.legendItems,function(t,e){var i=c.measureText(t.text).width,a=y+g/2+i,o=d.x,s=d.y;k?o+a>=l&&(s=d.y+=w,d.line++,o=d.x=n.left+(l-u[d.line])/2):s+w>n.bottom&&(o=d.x=o+n.columnWidths[d.line]+r.padding,s=d.y=n.top+r.padding,d.line++),x(o,s,t),b[e].left=o,b[e].top=s,_(o,s,t,i),k?d.x+=a+r.padding:d.y+=w})}},handleEvent:function(t){var e=this,n=e.options,i="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===i){if(!n.onHover)return}else{if("click"!==i)return;if(!n.onClick)return}var r=t.x,o=t.y;if(r>=e.left&&r<=e.right&&o>=e.top&&o<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(r>=u.left&&r<=u.left+u.width&&o>=u.top&&o<=u.top+u.height){if("click"===i){n.onClick.call(e,t.native,e.legendItems[l]),a=!0;break}if("mousemove"===i){n.onHover.call(e,t.native,e.legendItems[l]),a=!0;break}}}return a}}),{id:"legend",beforeInit:function(t){var e=t.options.legend;e&&n(t,e)},beforeUpdate:function(e){var r=e.options.legend,o=e.legend;r?(r=i.configMerge(t.defaults.global.legend,r),o?(a.configure(e,o,r),o.options=r):n(e,r)):o&&(a.removeBox(e,o),delete e.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}}},{}],43:[function(t,e,n){"use strict";e.exports=function(t){function e(e,n){var a=new t.Title({ctx:e.ctx,options:n,chart:e});i.configure(e,a,n),i.addBox(e,a),e.titleBlock=a}var n=t.helpers,i=t.layoutService,a=n.noop;return t.defaults.global.title={display:!1,position:"top",fullWidth:!0,weight:2e3,fontStyle:"bold",padding:10,text:""},t.Title=t.Element.extend({initialize:function(t){var e=this;n.extend(e,t),e.legendHitBoxes=[]},beforeUpdate:a,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:a,afterBuildLabels:a,beforeFit:a,fit:function(){var e=this,i=n.getValueOrDefault,a=e.options,r=t.defaults.global,o=a.display,s=i(a.fontSize,r.defaultFontSize),l=e.minSize;e.isHorizontal()?(l.width=e.maxWidth,l.height=o?s+2*a.padding:0):(l.width=o?s+2*a.padding:0,l.height=e.maxHeight),e.width=l.width,e.height=l.height},afterFit:a,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var e=this,i=e.ctx,a=n.getValueOrDefault,r=e.options,o=t.defaults.global;if(r.display){var s,l,u,d=a(r.fontSize,o.defaultFontSize),c=a(r.fontStyle,o.defaultFontStyle),h=a(r.fontFamily,o.defaultFontFamily),f=n.fontString(d,c,h),g=0,p=e.top,m=e.left,v=e.bottom,y=e.right;i.fillStyle=a(r.fontColor,o.defaultFontColor),i.font=f,e.isHorizontal()?(s=m+(y-m)/2,l=p+(v-p)/2,u=y-m):(s="left"===r.position?m+d/2:y-d/2,l=p+(v-p)/2,u=v-p,g=Math.PI*("left"===r.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(r.text,0,0,u),i.restore()}}}),{id:"title",beforeInit:function(t){var n=t.options.title;n&&e(t,n)},beforeUpdate:function(a){var r=a.options.title,o=a.titleBlock;r?(r=n.configMerge(t.defaults.global.title,r),o?(i.configure(a,o,r),o.options=r):e(a,r)):o&&(t.layoutService.removeBox(a,o),delete a.titleBlock)}}}},{}],44:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,n=t.getLabels();t.minIndex=0,t.maxIndex=n.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(n,t.options.ticks.min),t.minIndex=i!==-1?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(n,t.options.ticks.max),t.maxIndex=i!==-1?i:t.maxIndex),t.min=n[t.minIndex],t.max=n[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e,n,i){var a,r=this,o=Math.max(r.maxIndex+1-r.minIndex-(r.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&null!==t&&(a=r.isHorizontal()?t.x:t.y),void 0!==a||void 0!==t&&isNaN(e)){var s=r.getLabels();t=a||t;var l=s.indexOf(t);e=l!==-1?l:e}if(r.isHorizontal()){var u=r.width/o,d=u*(e-r.minIndex);return(r.options.gridLines.offsetGridLines&&i||r.maxIndex===r.minIndex&&i)&&(d+=u/2),r.left+Math.round(d)}var c=r.height/o,h=c*(e-r.minIndex);return r.options.gridLines.offsetGridLines&&i&&(h+=c/2),r.top+Math.round(h)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),r=(a?n.width:n.height)/i;return t-=a?n.left:n.top,n.options.gridLines.offsetGridLines&&(t-=r/2),e=t<=0?0:Math.round(t/r)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,n)}},{}],45:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=n.chart,r=a.data,o=r.datasets,s=n.isHorizontal(),l=0,u=1;n.min=null,n.max=null;var d=i.stacked;if(void 0===d&&e.each(o,function(e,n){if(!d){var i=a.getDatasetMeta(n);a.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(o,function(r,o){var s=a.getDatasetMeta(o),l=[s.type,void 0===i.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===c[l]&&(c[l]={positiveValues:[],negativeValues:[]});var u=c[l].positiveValues,d=c[l].negativeValues;a.isDatasetVisible(o)&&t(s)&&e.each(r.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||s.data[e].hidden||(u[e]=u[e]||0,d[e]=d[e]||0,i.relativePoints?u[e]=100:a<0?d[e]+=a:u[e]+=a)})}),e.each(c,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),r=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?r:Math.max(n.max,r)})}else e.each(o,function(i,r){var o=a.getDatasetMeta(r);a.isDatasetVisible(r)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});n.min=isFinite(n.min)?n.min:l,n.max=isFinite(n.max)?n.max:u,this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var r=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*r)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n=this,i=n.start,a=+n.getRightValue(t),r=n.end-i;return n.isHorizontal()?(e=n.left+n.width/r*(a-i),Math.round(e)):(e=n.bottom-n.height/r*(a-i),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=n?e.width:e.height,a=(n?t-e.left:e.bottom-t)/i;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,n)}},{}],46:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),r=e.sign(t.max);a<0&&r<0?t.max=0:a>0&&r>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(null===t.min?t.min=i.suggestedMin:t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(null===t.max?t.max=i.suggestedMax:t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var n=this,i=n.options,a=i.ticks,r=n.getTickLimit();r=Math.max(2,r);var o={maxTicks:r,min:a.min,max:a.max,stepSize:e.getValueOrDefault(a.fixedStepSize,a.stepSize)},s=n.ticks=t.Ticks.generators.linear(o,n);n.handleDirectionalChanges(),n.max=e.max(s),n.min=e.min(s),a.reverse?(s.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],47:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,r=n.chart,o=r.data,s=o.datasets,l=e.getValueOrDefault,u=n.isHorizontal();n.min=null,n.max=null,n.minNotZero=null;var d=i.stacked;if(void 0===d&&e.each(s,function(e,n){if(!d){var i=r.getDatasetMeta(n);r.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(s,function(a,o){var s=r.getDatasetMeta(o),l=[s.type,void 0===i.stacked&&void 0===s.stack?o:"",s.stack].join(".");r.isDatasetVisible(o)&&t(s)&&(void 0===c[l]&&(c[l]=[]),e.each(a.data,function(t,e){var a=c[l],r=+n.getRightValue(t);isNaN(r)||s.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=r)}))}),e.each(c,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(s,function(i,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i),0!==i&&(null===n.minNotZero||i<n.minNotZero)&&(n.minNotZero=i))})});n.min=l(a.min,n.min),n.max=l(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){var n=this,i=n.options,a=i.ticks,r={min:a.min,max:a.max},o=n.ticks=t.Ticks.generators.logarithmic(r,n);n.isHorizontal()||o.reverse(),n.max=e.max(o),n.min=e.min(o),a.reverse?(o.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var n,i,a,r=this,o=r.start,s=+r.getRightValue(t),l=r.options,u=l.ticks;return r.isHorizontal()?(a=e.log10(r.end)-e.log10(o),0===s?i=r.left:(n=r.width,i=r.left+n/a*(e.log10(s)-e.log10(o)))):(n=r.height,0!==o||u.reverse?0===r.end&&u.reverse?(a=e.log10(r.start)-e.log10(r.minNotZero),i=s===r.end?r.top:s===r.minNotZero?r.top+.02*n:r.top+.02*n+.98*n/a*(e.log10(s)-e.log10(r.minNotZero))):0===s?i=u.reverse?r.top:r.bottom:(a=e.log10(r.end)-e.log10(o),n=r.height,i=r.bottom-n/a*(e.log10(s)-e.log10(o))):(a=e.log10(r.end)-e.log10(r.minNotZero),i=s===o?r.bottom:s===r.minNotZero?r.bottom-.02*n:r.bottom-.02*n-.98*n/a*(e.log10(s)-e.log10(r.minNotZero)))),i},getValueForPixel:function(t){var n,i,a=this,r=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width,n=a.start*Math.pow(10,(t-a.left)*r/i)):(i=a.height,n=Math.pow(10,(a.bottom-t)*r/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],48:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function n(t){var e=t.options.pointLabels,n=f.getValueOrDefault(e.fontSize,g.defaultFontSize),i=f.getValueOrDefault(e.fontStyle,g.defaultFontStyle),a=f.getValueOrDefault(e.fontFamily,g.defaultFontFamily),r=f.fontString(n,i,a);return{size:n,style:i,family:a,font:r}}function i(t,e,n){return f.isArray(n)?{w:f.longestText(t,t.font,n),h:n.length*e+1.5*(n.length-1)*e}:{w:t.measureText(n).width,h:e}}function a(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function r(t){var r,o,s,l=n(t),u=Math.min(t.height/2,t.width/2),d={r:t.width,l:0,t:t.height,b:0},c={};t.ctx.font=l.font,t._pointLabelSizes=[];var h=e(t);for(r=0;r<h;r++){s=t.getPointPosition(r,u),o=i(t.ctx,l.size,t.pointLabels[r]||""),t._pointLabelSizes[r]=o;var g=t.getIndexAngle(r),p=f.toDegrees(g)%360,m=a(p,s.x,o.w,0,180),v=a(p,s.y,o.h,90,270);m.start<d.l&&(d.l=m.start,c.l=g),m.end>d.r&&(d.r=m.end,c.r=g),v.start<d.t&&(d.t=v.start,c.t=g),v.end>d.b&&(d.b=v.end,c.b=g)}t.setReductions(u,d,c)}function o(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function s(t){return 0===t||180===t?"center":t<180?"left":"right"}function l(t,e,n,i){if(f.isArray(e))for(var a=n.y,r=1.5*i,o=0;o<e.length;++o)t.fillText(e[o],n.x,a),a+=r;else t.fillText(e,n.x,n.y)}function u(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function d(t){var i=t.ctx,a=f.getValueOrDefault,r=t.options,o=r.angleLines,d=r.pointLabels;i.lineWidth=o.lineWidth,i.strokeStyle=o.color;var c=t.getDistanceFromCenterForValue(r.reverse?t.min:t.max),h=n(t);i.textBaseline="top";for(var p=e(t)-1;p>=0;p--){if(o.display){var m=t.getPointPosition(p,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(m.x,m.y),i.stroke(),i.closePath()}if(d.display){var v=t.getPointPosition(p,c+5),y=a(d.fontColor,g.defaultFontColor);i.font=h.font,i.fillStyle=y;var b=t.getIndexAngle(p),x=f.toDegrees(b);i.textAlign=s(x),u(x,t._pointLabelSizes[p],v),l(i,t.pointLabels[p]||"",v,h.size)}}}function c(t,n,i,a){var r=t.ctx;if(r.strokeStyle=f.getValueAtIndexOrDefault(n.color,a-1),r.lineWidth=f.getValueAtIndexOrDefault(n.lineWidth,a-1),t.options.gridLines.circular)r.beginPath(),r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),
	r.closePath(),r.stroke();else{var o=e(t);if(0===o)return;r.beginPath();var s=t.getPointPosition(0,i);r.moveTo(s.x,s.y);for(var l=1;l<o;l++)s=t.getPointPosition(l,i),r.lineTo(s.x,s.y);r.closePath(),r.stroke()}}function h(t){return f.isNumber(t)?t:0}var f=t.helpers,g=t.defaults.global,p={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}},m=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,n=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var i=f.min([t.height,t.width]),a=f.getValueOrDefault(n.fontSize,g.defaultFontSize);t.drawingArea=e.display?i/2-(a/2+n.backdropPaddingY):i/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;f.each(e.data.datasets,function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);f.each(a.data,function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=f.getValueOrDefault(t.fontSize,g.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.pointLabels.display?r(this):o(this)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-i.height,0)/Math.cos(n.b);a=h(a),r=h(r),o=h(o),s=h(s),i.drawingArea=Math.min(Math.round(t-(a+r)/2),Math.round(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-i-a.drawingArea;a.xCenter=Math.round((o+r)/2+a.left),a.yCenter=Math.round((s+l)/2+a.top)},getIndexAngle:function(t){var n=2*Math.PI/e(this),i=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,a=i*Math.PI*2/360;return t*n+a},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},draw:function(){var t=this,e=t.options,n=e.gridLines,i=e.ticks,a=f.getValueOrDefault;if(e.display){var r=t.ctx,o=a(i.fontSize,g.defaultFontSize),s=a(i.fontStyle,g.defaultFontStyle),l=a(i.fontFamily,g.defaultFontFamily),u=f.fontString(o,s,l);f.each(t.ticks,function(s,l){if(l>0||e.reverse){var d=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),h=t.yCenter-d;if(n.display&&0!==l&&c(t,n,d,l),i.display){var f=a(i.fontColor,g.defaultFontColor);if(r.font=u,i.showLabelBackdrop){var p=r.measureText(s).width;r.fillStyle=i.backdropColor,r.fillRect(t.xCenter-p/2-i.backdropPaddingX,h-o/2-i.backdropPaddingY,p+2*i.backdropPaddingX,o+2*i.backdropPaddingY)}r.textAlign="center",r.textBaseline="middle",r.fillStyle=f,r.fillText(s,t.xCenter,h)}}}),(e.angleLines.display||e.pointLabels.display)&&d(t)}}});t.scaleService.registerScaleType("radialLinear",m,p)}},{}],49:[function(t,e,n){"use strict";var i=t(6);i="function"==typeof i?i:window.moment,e.exports=function(t){function e(t,e){var n=t.options.time;if("string"==typeof n.parser)return i(e,n.parser);if("function"==typeof n.parser)return n.parser(e);if("function"==typeof e.getMonth||"number"==typeof e)return i(e);if(e.isValid&&e.isValid())return e;var a=n.format;return"string"!=typeof a&&a.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser."),a(e)):i(e,a)}function n(t,e,n,i){for(var a,r=Object.keys(s),o=r.length,l=r.indexOf(t);l<o;l++){a=r[l];var u=s[a],d=u.steps&&u.steps[u.steps.length-1]||u.maxStep;if(void 0===d||Math.ceil((n-e)/(d*u.size))<=i)break}return a}function a(t,e,n,i){var a=s[n],r=a.size,o=Math.ceil((e-t)/r),l=1,u=e-t;if(a.steps)for(var d=a.steps.length,c=0;c<d&&o>i;c++)l=a.steps[c],o=Math.ceil(u/(r*l));else for(;o>i&&i>0;)++l,o=Math.ceil(u/(r*l));return l}function r(t,e,n){var a=[];if(t.maxTicks){var r=t.stepSize;a.push(void 0!==t.min?t.min:n.min);for(var o=i(n.min);o.add(r,t.unit).valueOf()<n.max;)a.push(o.valueOf());var s=t.max||n.max;a[a.length-1]!==s&&a.push(s)}return a}var o=t.helpers,s={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1e3,steps:[1,2,5,10,30]},minute:{size:6e4,steps:[1,2,5,10,30]},hour:{size:36e5,steps:[1,2,3,6,12]},day:{size:864e5,steps:[1,2,5]},week:{size:6048e5,maxStep:4},month:{size:2628e6,maxStep:3},quarter:{size:7884e6,maxStep:4},year:{size:3154e7,maxStep:!1}},l={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}};t.Ticks.generators.time=function(t,e){var n,a,o=t.isoWeekday;return"week"===t.unit&&o!==!1?(n=i(e.min).startOf("isoWeek").isoWeekday(o).valueOf(),a=i(e.max).startOf("isoWeek").isoWeekday(o),e.max-a>0&&a.add(1,"week"),a=a.valueOf()):(n=i(e.min).startOf(t.unit).valueOf(),a=i(e.max).startOf(t.unit),e.max-a>0&&a.add(1,t.unit),a=a.valueOf()),r(t,e,{min:n,max:a})};var u=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},determineDataLimits:function(){var t,n=this,i=n.options.time,a=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=n.chart.data,l={labels:[],datasets:[]};o.each(s.labels,function(o,s){var u=e(n,o);u.isValid()&&(i.round&&u.startOf(i.round),t=u.valueOf(),a=Math.min(t,a),r=Math.max(t,r),l.labels[s]=t)}),o.each(s.datasets,function(s,u){var d=[];"object"==typeof s.data[0]&&null!==s.data[0]&&n.chart.isDatasetVisible(u)?o.each(s.data,function(o,s){var l=e(n,n.getRightValue(o));l.isValid()&&(i.round&&l.startOf(i.round),t=l.valueOf(),a=Math.min(t,a),r=Math.max(t,r),d[s]=t)}):d=l.labels.slice(),l.datasets[u]=d}),n.dataMin=a,n.dataMax=r,n._parsedData=l},buildTicks:function(){var i,r,s=this,l=s.options.time,u=s.dataMin,d=s.dataMax;if(l.min){var c=e(s,l.min);l.round&&c.round(l.round),i=c.valueOf()}l.max&&(r=e(s,l.max).valueOf());var h=s.getLabelCapacity(i||u),f=l.unit||n(l.minUnit,i||u,r||d,h);s.displayFormat=l.displayFormats[f];var g=l.stepSize||a(i||u,r||d,f,h);s.ticks=t.Ticks.generators.time({maxTicks:h,min:i,max:r,stepSize:g,unit:f,isoWeekday:l.isoWeekday},{min:u,max:d}),s.max=o.max(s.ticks),s.min=o.min(s.ticks)},getLabelForIndex:function(t,n){var i=this,a=i.chart.data.labels&&t<i.chart.data.labels.length?i.chart.data.labels[t]:"",r=i.chart.data.datasets[n].data[t];return null!==r&&"object"==typeof r&&(a=i.getRightValue(r)),i.options.time.tooltipFormat&&(a=e(i,a).format(i.options.time.tooltipFormat)),a},tickFormatFunction:function(t,e,n){var i=t.format(this.displayFormat),a=this.options.ticks,r=o.getValueOrDefault(a.callback,a.userCallback);return r?r(i,e,n):i},convertTicksToLabels:function(){var t=this;t.ticksAsTimestamps=t.ticks,t.ticks=t.ticks.map(function(t){return i(t)}).map(t.tickFormatFunction,t)},getPixelForOffset:function(t){var e=this,n=e.max-e.min,i=n?(t-e.min)/n:0;if(e.isHorizontal()){var a=e.width*i;return e.left+Math.round(a)}var r=e.height*i;return e.top+Math.round(r)},getPixelForValue:function(t,n,i){var a=this,r=null;if(void 0!==n&&void 0!==i&&(r=a._parsedData.datasets[i][n]),null===r&&(t&&t.isValid||(t=e(a,a.getRightValue(t))),t&&t.isValid&&t.isValid()&&(r=t.valueOf())),null!==r)return a.getPixelForOffset(r)},getPixelForTick:function(t){return this.getPixelForOffset(this.ticksAsTimestamps[t])},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width:e.height,a=(t-(e.isHorizontal()?e.left:e.top))/n;return i(e.min+a*(e.max-e.min))},getLabelWidth:function(e){var n=this,i=n.options.ticks,a=n.ctx.measureText(e).width,r=Math.cos(o.toRadians(i.maxRotation)),s=Math.sin(o.toRadians(i.maxRotation)),l=o.getValueOrDefault(i.fontSize,t.defaults.global.defaultFontSize);return a*r+l*s},getLabelCapacity:function(t){var e=this;e.displayFormat=e.options.time.displayFormats.millisecond;var n=e.tickFormatFunction(i(t),0,[]),a=e.getLabelWidth(n),r=e.isHorizontal()?e.width:e.height,o=r/a;return o}});t.scaleService.registerScaleType("time",u,l)}},{6:6}]},{},[7])(7)});

/***/ }
/******/ ]);